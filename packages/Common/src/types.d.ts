type ItemOf<T> = T extends readonly (infer U)[] ? U : never; //helper for returning items from an iterable

type Inner<Object extends {}> = Object[keyof Object]; // helper for returning union of all property values on an object type

type IfEquals<X, Y, A = X, B = never> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B;

type MutableProps<T> = {
    [P in keyof T]-?: IfEquals<
        { [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T];

type ReadOnlyProps<T> = keyof Omit<T, MutableProps<T>>

type OptionalProps<T> = {
    [P in keyof T]-?: IfEquals<
        { [Q in P]: T[P] }, { [Q in P]?: T[P] }, P>
}[keyof T];

type RequiredProps<T> = keyof Omit<T, OptionalProps<T>>

type OptionalAndReadOnlyProps<T> = OptionalProps<T> & ReadOnlyProps<T>