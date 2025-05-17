#  React Practice Tasks: useCallback & useMemo

These tasks will help you understand and practice `useCallback` and `useMemo` in real-world React use cases.

---

## TASK 1: Prevent Unnecessary Re-render with `useCallback`

**Objective:** Optimize a counter app with a child button component.

**Instructions:**
- Create a `Counter` component with two state variables: `count` and `clicks`.
- Create a child component `<IncrementButton />` that receives a function via props.
- Use `React.memo` and `useCallback` to prevent re-rendering of the button when only `clicks` changes.

---

## TASK 2: Use `useMemo` to Optimize Expensive Calculation

**Objective:** Avoid re-running a slow calculation unnecessarily.

**Instructions:**
- Create a factorial calculator.
- Write a recursive function to compute the factorial of a number.
- Use `useMemo` to memoize the result.
- Ensure the calculation runs **only when the input number changes**.

---

## TASK 3: Debounce Input Change using `useCallback`

**Objective:** Improve performance for rapid typing.

**Instructions:**
- Create a search input.
- Use `useCallback` to debounce the API call (mock using `setTimeout`).
- Ensure the API function is not recreated on every keystroke.
- Show a loading state while typing.

---

## TASK 4: Cache Filtered Data with `useMemo`

**Objective:** Avoid re-filtering a list unnecessarily.

**Instructions:**
- Create a list of 100+ users (mocked data).
- Add a search input to filter users by name.
- Use `useMemo` to memoize the filtered result.
- Ensure filtering only happens when the search term changes.

---

## TASK 5: Compare Performance — With vs Without `useCallback`

**Objective:** Understand the difference `useCallback` makes.

**Instructions:**
- Create two versions of a component that passes a function to a child:
  1. Without `useCallback`
  2. With `useCallback`
- Add `console.log()` inside the child to show when it re-renders.
- Observe and compare re-rendering behavior in both cases.



