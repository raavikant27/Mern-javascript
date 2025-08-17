# Promise Combinators in JavaScript

Here is the simple theory you provided, structured clearly:

---

## 1. Promise.all()

1. It takes an **array (iterable)** as input.
2. We pass promises inside this array.
3. Example: `p1` takes 3 sec, `p2` takes 4 sec, and `p3` takes 5 sec.
4. All run in **parallel** but the final result comes only when **all promises finish** → total time = 5 sec.
5. The result is returned in an **array of values**.
6. If **any promise rejects**, `Promise.all` immediately rejects with that error.
   - Example: If `p2` rejects in 1 sec → output will be error in **1 sec** (it does not wait for others).

---

## 2. Promise.allSettled()

1. Takes an array of promises like `[p1, p2, p3]`.
2. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec (rejects)
   - `p3` → 2 sec
3. Waits for **all promises to be settled** (fulfilled or rejected).
4. Returns an **array with objects**:
   - Fulfilled → `{status: 'fulfilled', value: ...}`
   - Rejected → `{status: 'rejected', reason: ...}`
5. Time taken = the longest promise (here **3 sec**).
6. Output: `[val1, error, val3]` with status.

---

## 3. Promise.race()

1. Takes array `[p1, p2, p3]`.
2. Returns the **first settled promise** (success or error).
3. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec
   - `p3` → 2 sec
4. After 1 sec → result is from `p2` (either success or error).
5. It does **not wait** for others.

---

## 4. Promise.any()

1. Takes array `[p1, p2, p3]`.
2. Returns the **first successful promise**.
3. Ignores errors.
4. Example:
   - `p1` → 3 sec
   - `p2` → 1 sec (rejects)
   - `p3` → 2 sec (success)
5. After 2 sec → result = value from `p3`.
6. If **all reject** → returns an `AggregateError` with all errors `[error1, error2, error3]`.

---

✅ **Summary:**
- `Promise.all` → waits for all, fails fast on any rejection.
- `Promise.allSettled` → waits for all, gives results + errors.
- `Promise.race` → first settled (success/error).
- `Promise.any` → first success, if all fail → AggregateError.
