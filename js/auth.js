const SESSION_KEY = "demo_session";

function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setSession(username) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username: username }));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function requireAuth() {
  const session = getSession();
  if (!session || !session.username) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

function redirectIfLoggedIn() {
  const session = getSession();
  if (session && session.username) {
    window.location.href = "dashboard.html";
  }
}
