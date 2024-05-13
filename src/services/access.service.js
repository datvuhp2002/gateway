"use strict";

const bcrypt = require("bcrypt");
const crypto = require("node:crypto");

const { createTokenPair, verifyJWT } = require("../auth/authUtils");
const { getUserByEmail } = require("../utils");
const {
  BadRequestError,
  AuthFailureError,
  ForbiddenError,
} = require("../core/error.response");
// service

class AccessService {
  /*
    1 - check email in db
    2 - match Password
    3 - create AT and RT and save
    4 - generate Token
    5 - get data return login
  */
  static login = async ({ email, password, refreshToken = null }) => {
    // 1
    const userData = await getUserByEmail(email);
    const match = bcrypt.compare(password, userData.user.password);
    if (!match) {
      throw new AuthFailureError("Error: Authentication error");
    }
    const { user_id: userId } = userData.user;
    const tokens = await createTokenPair(
      { userId, email, role: userData.role },
      process.env.PUBLIC_KEY,
      process.env.PRIVATE_KEY
    );
    return {
      tokens,
    };
  };

  static handleRefreshToken = async ({ user, refreshToken }) => {
    if (!refreshToken) {
      throw new AuthFailureError("Không có mã được gửi lên");
    }
    console.log("USER:::", user);
    const { userId, email } = user;
    const userData = await getUserByEmail(email);
    if (!userData) throw new AuthFailureError("User is not registered");
    // create new token
    const tokens = await createTokenPair(
      { userId, email, role: user.role },
      process.env.PUBLIC_KEY,
      process.env.PRIVATE_KEY
    );
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  };
}

module.exports = AccessService;
