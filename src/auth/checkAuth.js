"use strict";

const HEADER = {
  AUTHORIZATION: "authorization",
};

const permissionsAuthentication = (requiredPermissions) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        message: "Permissions denied",
      });
    }
    const userRole = req.user.role;
    const hasRequiredPermission = requiredPermissions.some((permission) => {
      return userRole.name === permission || userRole === "ADMIN";
    });
    // Nếu người dùng có quyền truy cập yêu cầu hoặc cao hơn, cho phép tiếp tục
    if (hasRequiredPermission || userRole === "ADMIN") {
      return next();
    } else {
      return res.status(403).json({
        message: `Chỉ có ${requiredPermissions.join(
          ", "
        )} mới được xem thông tin này`,
      });
    }
  };
};

module.exports = { permissionsAuthentication };
