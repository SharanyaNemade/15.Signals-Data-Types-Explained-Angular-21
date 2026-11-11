# Angular21Tutorial


In Angular 21 Signals, the difference between `set()` and `update()` is simple:

- `set()` – Use when you want to assign a completely new value, and that value does not depend on the previous signal value.
- `update()` – Use when the new value depends on the existing signal value.

Let's understand this with TypeScript examples.

## 1. Signal data type vs. signal value data type

In Angular, a signal has a type called `WritableSignal<T>`.

Here, `T` represents the type of value stored inside the signal.

typescript

```typescript
import { signal, WritableSignal } from '@angular/core';

count: WritableSignal<number> = signal(10);
name: WritableSignal<string> = signal('Angular');
isActive: WritableSignal<boolean> = signal(true);
```

Here:

- `WritableSignal<number>` means the signal stores a number.
- `WritableSignal<string>` means the signal stores a string.
- `WritableSignal<boolean>` means the signal stores a boolean.

Important interview concept:

`WritableSignal<number>` is the signal's data type, whereas `number` is its value data type.

## 2. How to define data types for signals

You can define signal types explicitly or let TypeScript infer them.

Explicit typing:

typescript

```typescript
count: WritableSignal<number> = signal<number>(10);
```

Type inference:

typescript

```typescript
count = signal(10);
```

Both approaches work.

## 3. Union types in Angular Signals

You can also use union types when a signal can hold multiple types of values.

typescript

```typescript
value: WritableSignal<string | number | boolean> =
  signal<string | number | boolean>(10);
```

Now the signal can store:

typescript

```typescript
value.set('Angular');
value.set(100);
value.set(true);
```

All three are valid.

## 4. Data typing in Computed Signals

Computed signals derive their values from other signals.

typescript

```typescript
import { signal, computed } from '@angular/core';

count = signal<number>(10);

doubleCount = computed<number>(() => {
  return this.count() * 2;
});
```

Here:

- `count` is a writable signal.
- `doubleCount` is a computed signal.
- `computed<number>()` specifies the computed signal's return type.

A computed signal is read-only. You cannot call `set()` or `update()` on it.

## 5. Difference between set() and update()

This is the most important interview concept.

### A. set() method

Use `set()` when you already know the new value.

typescript

```typescript
count = signal<number>(10);

// Assign a new value
this.count.set(50);
```

Another example:

typescript

```typescript
name = signal<string>('John');

this.name.set('David');
```

The new value doesn't depend on the previous value.

### B. update() method

Use `update()` when the new value depends on the existing value.

typescript

```typescript
count = signal<number>(10);

// Increment existing value
this.count.update(currentValue => currentValue + 1);
```

Other examples:

typescript

```typescript
this.count.update(value => value * 2);

this.count.update(value => value - 5);
```

Here, `currentValue` represents the previous value of the signal.

## 6. Real-world examples with arrays

Consider an array signal containing employee names.

typescript

```typescript
employees = signal<string[]>(['John', 'David']);
```

Using set():

typescript

```typescript
this.employees.set(['John', 'David', 'Smith']);
```

You provide the complete new array.

Using update():

typescript

```typescript
this.employees.update(currentEmployees => [
  ...currentEmployees,
  'Smith'
]);
```

You use the existing array and create a new array with an additional employee.

Another example: Removing an employee.

typescript

```typescript
this.employees.update(currentEmployees =>
  currentEmployees.filter(name => name !== 'John')
);
```

## 7. Interview comparison

| Feature | set() | update() |
| --- | --- | --- |
| Purpose | Assign new value | Modify based on current value |
| Previous value required? | No | Yes |
| Accepts | Direct value | Callback function |
| Arrays | Replace array | Derive a new array |
| Numbers | Assign number | Increment/decrement |
| Strings | Replace string | Append or modify |

## 8. Angular Signals interview questions and answers

Q1. When should we use set() in Angular Signals?

Answer: When we want to assign a new value that does not depend on the previous value.

Q2. When should we use update() in Angular Signals?

Answer: When the new value depends on the existing signal value.

Q3. Can we use set() and update() with arrays?

Answer: Yes. Both support arrays. `set()` replaces the array, while `update()` lets us derive a new array using the existing one.

Q4. Can we use update() with primitive values?

Answer: Yes. We can use it with numbers, strings, and booleans.

Q5. Can we use set() on computed signals?

Answer: No. Computed signals are read-only.

Q6. Does update() modify the original array automatically?

Answer: No. Prefer creating a new array using spread syntax, `filter()`, or `map()` instead of mutating the existing array.

## Final interview takeaway

Use set()When the new value is independent of the previous value.

typescript

```typescript
this.count.set(100);
```

Use update()When the new value depends on the previous value.

typescript

```typescript
this.count.update(value => value + 1);
```

One-line interview answer:

"In Angular 21 Signals, `set()` is used to assign a new value directly, whereas `update()` is used to calculate a new value based on the current signal value."

Both methods are valid in Angular 21.
