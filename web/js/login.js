"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";

function main() {
    let formulario = document.getElementById("form-login")
    formulario.onsubmit = FunctionLogin
}

function FunctionLogin (event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    sendRegister(formData)
}

async function sendRegister(formData) {
  try {
    let loginData = await authAPI_auto.login(formData);
    let sessionToken = loginData.sessionToken;
    let loggedUser = loginData.user;
    sessionManager.login(sessionToken,loggedUser);
    window.location.href = "index.html";
  } catch (err) {
    messageRenderer.showErrorMessage("Error registering a new user", err);
  }
}


document.addEventListener("DOMContentLoaded", main);
