"use strict";

const userServicesRoutes = {
  "/findByEmail": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/findByEmail`,
    authRequired: false,
    permissions: null,
  },
  "/getAllStaffInDepartment": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/getAllStaffInDepartment`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/getAllStaffByUserProperty": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/getAllStaffByUserProperty`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/admin/getAllStaffInDepartment": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/getAllStaffInDepartment`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/getAll": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/getAll`,
    authRequired: true,
    permissions: ["ADMIN", "STAFF"],
  },
  "/admin/trash": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/trash`,
    authRequired: false,
    permissions: ["ADMIN"],
  },
  "/admin/create": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/create`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/update": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/update`,
    authRequired: true,
    permissions: null,
  },
  "/admin/update": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/update`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/detail": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/detail`,
    authRequired: true,
    permissions: null,
  },
  "/admin/detail": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/detail`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/delete": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/delete`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/restore": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/admin/restore`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/addUserIntoDepartment": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/addUserIntoDepartment`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/removeStaffFromDepartment": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/removeStaffFromDepartment`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/uploadAvatarFromLocal": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/uploadAvatarFromLocal`,
    authRequired: true,
    permissions: null,
  },
  "/getAvatar": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/getAvatar`,
    authRequired: true,
    permissions: null,
  },
  "/deleteAvatarInCloud": {
    target: `${process.env.USER_SERVICES_REQUEST_URL}/deleteAvatarInCloud`,
    authRequired: true,
    permissions: null,
  },
};
const departmentServicesRoutes = {
  "/getAll": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/getAll`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/trash": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/trash`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/create": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/create`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/update": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/update`,
    authRequired: true,
    permissions: ["MANAGER"],
  },
  "/admin/update": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/admin/update`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/detail": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/detail`,
    authRequired: true,
    permissions: null,
  },
  "/delete": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/delete`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/restore": {
    target: `${process.env.DEPARTMENT_SERVICES_REQUEST_URL}/restore`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
};
const assignmentServicesRoutes = {
  "/getAll": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/getAll`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/getAllStaffFromProject": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/getAllStaffFromProject`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/removeStaffFromProject": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/removeStaffFromProject`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/admin/trash": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/admin/trash`,
    authRequired: true,
    permissions: null,
  },
  "/create": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/create`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/update": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/update`,
    authRequired: true,
    permissions: null,
  },
  "/detail": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/detail`,
    authRequired: true,
    permissions: null,
  },
  "/delete": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/delete`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/restore": {
    target: `${process.env.ASSIGNMENT_SERVICES_REQUEST_URL}/admin/restore`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
};
const projectServicesRoutes = {
  "/getAll": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/getAll`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/trash": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/trash`,
    authRequired: true,
    permissions: null,
  },
  "/create": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/create`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/update": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/update`,
    authRequired: true,
    permissions: null,
  },
  "/detail": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/detail`,
    authRequired: true,
    permissions: null,
  },
  "/delete": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/delete`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/restore": {
    target: `${process.env.PROJECT_SERVICES_REQUEST_URL}/restore`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
};
const clientRoutes = {
  "/admin/getAll": {
    target: `${process.env.CLIENT_REQUEST_URL}/admin/getAll`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/trash": {
    target: `${process.env.CLIENT_REQUEST_URL}/admin/trash`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/admin/restore": {
    target: `${process.env.CLIENT_REQUEST_URL}/admin/restore`,
    authRequired: true,
    permissions: ["ADMIN"],
  },
  "/getAllClientFromProject": {
    target: `${process.env.CLIENT_REQUEST_URL}/getAllClientFromProject`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/create": {
    target: `${process.env.CLIENT_REQUEST_URL}/create`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/update": {
    target: `${process.env.CLIENT_REQUEST_URL}/update`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/detail": {
    target: `${process.env.CLIENT_REQUEST_URL}/detail`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/delete": {
    target: `${process.env.CLIENT_REQUEST_URL}/delete`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },

  "/uploadAvatarFromLocal": {
    target: `${process.env.CLIENT_REQUEST_URL}/uploadAvatarFromLocal`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
  "/getAvatar": {
    target: `${process.env.CLIENT_REQUEST_URL}/getAvatar`,
    authRequired: true,
    permissions: ["ADMIN", "MANAGER"],
  },
};
module.exports = {
  userServicesRoutes,
  projectServicesRoutes,
  departmentServicesRoutes,
  assignmentServicesRoutes,
  clientRoutes,
};
