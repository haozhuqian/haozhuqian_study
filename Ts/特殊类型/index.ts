type N = 'a' & 'b';

type isNever<A> = [A] extends [never] ? true : false;
type IN1 = isNever<'never'>;
type IN2 = isNever<never>;

