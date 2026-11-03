// Reusable client-side validation helpers
const Validators = {
  // TN66AB1234, TN 66 AB 1234, TN66A1234 (spaces/hyphens ignored)
  vehicleNumber(v) {
    const s = v.replace(/[\s-]/g, "").toUpperCase();
    return /^[A-Z]{2}[0-9]{2}[A-Z]{1,3}[0-9]{4}$/.test(s);
  },
  mobile(v) {
    return /^[6-9][0-9]{9}$/.test(v.trim());
  },
  email(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  },
  pincode(v) {
    return /^[1-9][0-9]{5}$/.test(v.trim());
  },
  name(v) {
    return /^[A-Za-z][A-Za-z .'-]{1,39}$/.test(v.trim());
  },
  // value is yyyy-mm-dd from <input type="date">
  futureOrToday(v) {
    if (!v) return false;
    const picked = new Date(v + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return picked >= today;
  },
  withinDays(v, days) {
    const picked = new Date(v + "T00:00:00");
    const limit = new Date();
    limit.setHours(0, 0, 0, 0);
    limit.setDate(limit.getDate() + days);
    return picked <= limit;
  },
  // value is HH:MM
  withinHours(v, open, close) {
    if (!v) return false;
    const [h, m] = v.split(":").map(Number);
    const mins = h * 60 + m;
    return mins >= open * 60 && mins <= close * 60;
  },
  // Not in the past if date is today
  notPastTime(dateStr, timeStr) {
    const dt = new Date(dateStr + "T" + timeStr + ":00");
    return dt.getTime() >= Date.now();
  },
  numberBetween(v, min, max) {
    const n = Number(v);
    return v !== "" && !isNaN(n) && n >= min && n <= max;
  }
};

// Show / clear an error on a .field wrapper
function setFieldState(input, message) {
  const field = input.closest(".field");
  if (!field) return !message;
  const err = field.querySelector(".error");
  field.classList.remove("valid", "invalid");
  if (message) {
    field.classList.add("invalid");
    if (err) err.textContent = message;
    input.setAttribute("aria-invalid", "true");
    return false;
  }
  field.classList.add("valid");
  if (err) err.textContent = "";
  input.setAttribute("aria-invalid", "false");
  return true;
}

function clearFormState(form) {
  form.querySelectorAll(".field").forEach(function (f) {
    f.classList.remove("valid", "invalid");
    const e = f.querySelector(".error");
    if (e) e.textContent = "";
  });
}

function showAlert(el, type, text) {
  el.className = "alert show " + type;
  el.textContent = text;
  el.setAttribute("role", "alert");
}
