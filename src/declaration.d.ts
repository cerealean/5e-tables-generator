declare module 'core-js/actual/object/group-by'; 
declare interface ObjectConstructor {
    groupBy: <T>(items: Iterable<T>, callbackFn: (element: T) => string | symbol) => T[];
    groupBy: <T>(items: Iterable<T>, callbackFn: (element: T, index: number) => string | symbol) => T[];
    // export groupBy;
}