
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Spell
 * 
 */
export type Spell = {
  id: number
  name: string
  level: Level
  school: School
  text: string
  atHigherLevels: string | null
  verbal: boolean
  somatic: boolean
  material: boolean
  cost: string | null
  concentration: boolean
  ritual: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Level: {
  Cantrip: 'Cantrip',
  First: 'First',
  Second: 'Second',
  Third: 'Third',
  Fourth: 'Fourth',
  Fifth: 'Fifth',
  Sixth: 'Sixth',
  Seventh: 'Seventh',
  Eighth: 'Eighth',
  Ninth: 'Ninth'
};

export type Level = (typeof Level)[keyof typeof Level]


export const School: {
  Abjuration: 'Abjuration',
  Evocation: 'Evocation',
  Illusion: 'Illusion',
  Divination: 'Divination',
  Transmutation: 'Transmutation',
  Necromancy: 'Necromancy',
  Conjuration: 'Conjuration',
  Enchantment: 'Enchantment'
};

export type School = (typeof School)[keyof typeof School]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Spells
 * const spells = await prisma.spell.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Spells
   * const spells = await prisma.spell.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.spell`: Exposes CRUD operations for the **Spell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spells
    * const spells = await prisma.spell.findMany()
    * ```
    */
  get spell(): Prisma.SpellDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.12.0
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Spell: 'Spell'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Spell
   */


  export type AggregateSpell = {
    _count: SpellCountAggregateOutputType | null
    _avg: SpellAvgAggregateOutputType | null
    _sum: SpellSumAggregateOutputType | null
    _min: SpellMinAggregateOutputType | null
    _max: SpellMaxAggregateOutputType | null
  }

  export type SpellAvgAggregateOutputType = {
    id: number | null
  }

  export type SpellSumAggregateOutputType = {
    id: number | null
  }

  export type SpellMinAggregateOutputType = {
    id: number | null
    name: string | null
    level: Level | null
    school: School | null
    text: string | null
    atHigherLevels: string | null
    verbal: boolean | null
    somatic: boolean | null
    material: boolean | null
    cost: string | null
    concentration: boolean | null
    ritual: boolean | null
  }

  export type SpellMaxAggregateOutputType = {
    id: number | null
    name: string | null
    level: Level | null
    school: School | null
    text: string | null
    atHigherLevels: string | null
    verbal: boolean | null
    somatic: boolean | null
    material: boolean | null
    cost: string | null
    concentration: boolean | null
    ritual: boolean | null
  }

  export type SpellCountAggregateOutputType = {
    id: number
    name: number
    level: number
    school: number
    text: number
    atHigherLevels: number
    verbal: number
    somatic: number
    material: number
    cost: number
    concentration: number
    ritual: number
    _all: number
  }


  export type SpellAvgAggregateInputType = {
    id?: true
  }

  export type SpellSumAggregateInputType = {
    id?: true
  }

  export type SpellMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    school?: true
    text?: true
    atHigherLevels?: true
    verbal?: true
    somatic?: true
    material?: true
    cost?: true
    concentration?: true
    ritual?: true
  }

  export type SpellMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    school?: true
    text?: true
    atHigherLevels?: true
    verbal?: true
    somatic?: true
    material?: true
    cost?: true
    concentration?: true
    ritual?: true
  }

  export type SpellCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    school?: true
    text?: true
    atHigherLevels?: true
    verbal?: true
    somatic?: true
    material?: true
    cost?: true
    concentration?: true
    ritual?: true
    _all?: true
  }

  export type SpellAggregateArgs = {
    /**
     * Filter which Spell to aggregate.
     * 
    **/
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     * 
    **/
    orderBy?: Enumerable<SpellOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spells
    **/
    _count?: true | SpellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpellMaxAggregateInputType
  }

  export type GetSpellAggregateType<T extends SpellAggregateArgs> = {
        [P in keyof T & keyof AggregateSpell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpell[P]>
      : GetScalarType<T[P], AggregateSpell[P]>
  }




  export type SpellGroupByArgs = {
    where?: SpellWhereInput
    orderBy?: Enumerable<SpellOrderByWithAggregationInput>
    by: Array<SpellScalarFieldEnum>
    having?: SpellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpellCountAggregateInputType | true
    _avg?: SpellAvgAggregateInputType
    _sum?: SpellSumAggregateInputType
    _min?: SpellMinAggregateInputType
    _max?: SpellMaxAggregateInputType
  }


  export type SpellGroupByOutputType = {
    id: number
    name: string
    level: Level
    school: School
    text: string
    atHigherLevels: string | null
    verbal: boolean
    somatic: boolean
    material: boolean
    cost: string | null
    concentration: boolean
    ritual: boolean
    _count: SpellCountAggregateOutputType | null
    _avg: SpellAvgAggregateOutputType | null
    _sum: SpellSumAggregateOutputType | null
    _min: SpellMinAggregateOutputType | null
    _max: SpellMaxAggregateOutputType | null
  }

  type GetSpellGroupByPayload<T extends SpellGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SpellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpellGroupByOutputType[P]>
            : GetScalarType<T[P], SpellGroupByOutputType[P]>
        }
      >
    >


  export type SpellSelect = {
    id?: boolean
    name?: boolean
    level?: boolean
    school?: boolean
    text?: boolean
    atHigherLevels?: boolean
    verbal?: boolean
    somatic?: boolean
    material?: boolean
    cost?: boolean
    concentration?: boolean
    ritual?: boolean
  }

  export type SpellGetPayload<
    S extends boolean | null | undefined | SpellArgs,
    U = keyof S
      > = S extends true
        ? Spell
    : S extends undefined
    ? never
    : S extends SpellArgs | SpellFindManyArgs
    ?'include' extends U
    ? Spell 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Spell ? Spell[P] : never
  } 
    : Spell
  : Spell


  type SpellCountArgs = Merge<
    Omit<SpellFindManyArgs, 'select' | 'include'> & {
      select?: SpellCountAggregateInputType | true
    }
  >

  export interface SpellDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Spell that matches the filter.
     * @param {SpellFindUniqueArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpellFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpellFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Spell'> extends True ? CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>> : CheckSelect<T, Prisma__SpellClient<Spell | null >, Prisma__SpellClient<SpellGetPayload<T> | null >>

    /**
     * Find the first Spell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellFindFirstArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpellFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpellFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Spell'> extends True ? CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>> : CheckSelect<T, Prisma__SpellClient<Spell | null >, Prisma__SpellClient<SpellGetPayload<T> | null >>

    /**
     * Find zero or more Spells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spells
     * const spells = await prisma.spell.findMany()
     * 
     * // Get first 10 Spells
     * const spells = await prisma.spell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spellWithIdOnly = await prisma.spell.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpellFindManyArgs>(
      args?: SelectSubset<T, SpellFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Spell>>, PrismaPromise<Array<SpellGetPayload<T>>>>

    /**
     * Create a Spell.
     * @param {SpellCreateArgs} args - Arguments to create a Spell.
     * @example
     * // Create one Spell
     * const Spell = await prisma.spell.create({
     *   data: {
     *     // ... data to create a Spell
     *   }
     * })
     * 
    **/
    create<T extends SpellCreateArgs>(
      args: SelectSubset<T, SpellCreateArgs>
    ): CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>>

    /**
     * Create many Spells.
     *     @param {SpellCreateManyArgs} args - Arguments to create many Spells.
     *     @example
     *     // Create many Spells
     *     const spell = await prisma.spell.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpellCreateManyArgs>(
      args?: SelectSubset<T, SpellCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Spell.
     * @param {SpellDeleteArgs} args - Arguments to delete one Spell.
     * @example
     * // Delete one Spell
     * const Spell = await prisma.spell.delete({
     *   where: {
     *     // ... filter to delete one Spell
     *   }
     * })
     * 
    **/
    delete<T extends SpellDeleteArgs>(
      args: SelectSubset<T, SpellDeleteArgs>
    ): CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>>

    /**
     * Update one Spell.
     * @param {SpellUpdateArgs} args - Arguments to update one Spell.
     * @example
     * // Update one Spell
     * const spell = await prisma.spell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpellUpdateArgs>(
      args: SelectSubset<T, SpellUpdateArgs>
    ): CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>>

    /**
     * Delete zero or more Spells.
     * @param {SpellDeleteManyArgs} args - Arguments to filter Spells to delete.
     * @example
     * // Delete a few Spells
     * const { count } = await prisma.spell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpellDeleteManyArgs>(
      args?: SelectSubset<T, SpellDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spells
     * const spell = await prisma.spell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpellUpdateManyArgs>(
      args: SelectSubset<T, SpellUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Spell.
     * @param {SpellUpsertArgs} args - Arguments to update or create a Spell.
     * @example
     * // Update or create a Spell
     * const spell = await prisma.spell.upsert({
     *   create: {
     *     // ... data to create a Spell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spell we want to update
     *   }
     * })
    **/
    upsert<T extends SpellUpsertArgs>(
      args: SelectSubset<T, SpellUpsertArgs>
    ): CheckSelect<T, Prisma__SpellClient<Spell>, Prisma__SpellClient<SpellGetPayload<T>>>

    /**
     * Count the number of Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellCountArgs} args - Arguments to filter Spells to count.
     * @example
     * // Count the number of Spells
     * const count = await prisma.spell.count({
     *   where: {
     *     // ... the filter for the Spells we want to count
     *   }
     * })
    **/
    count<T extends SpellCountArgs>(
      args?: Subset<T, SpellCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpellAggregateArgs>(args: Subset<T, SpellAggregateArgs>): PrismaPromise<GetSpellAggregateType<T>>

    /**
     * Group by Spell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpellGroupByArgs['orderBy'] }
        : { orderBy?: SpellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpellGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpellClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Spell findUnique
   */
  export type SpellFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * Throw an Error if a Spell can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Spell to fetch.
     * 
    **/
    where: SpellWhereUniqueInput
  }


  /**
   * Spell findFirst
   */
  export type SpellFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * Throw an Error if a Spell can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Spell to fetch.
     * 
    **/
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     * 
    **/
    orderBy?: Enumerable<SpellOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spells.
     * 
    **/
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spells.
     * 
    **/
    distinct?: Enumerable<SpellScalarFieldEnum>
  }


  /**
   * Spell findMany
   */
  export type SpellFindManyArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * Filter, which Spells to fetch.
     * 
    **/
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     * 
    **/
    orderBy?: Enumerable<SpellOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spells.
     * 
    **/
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SpellScalarFieldEnum>
  }


  /**
   * Spell create
   */
  export type SpellCreateArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * The data needed to create a Spell.
     * 
    **/
    data: XOR<SpellCreateInput, SpellUncheckedCreateInput>
  }


  /**
   * Spell createMany
   */
  export type SpellCreateManyArgs = {
    /**
     * The data used to create many Spells.
     * 
    **/
    data: Enumerable<SpellCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Spell update
   */
  export type SpellUpdateArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * The data needed to update a Spell.
     * 
    **/
    data: XOR<SpellUpdateInput, SpellUncheckedUpdateInput>
    /**
     * Choose, which Spell to update.
     * 
    **/
    where: SpellWhereUniqueInput
  }


  /**
   * Spell updateMany
   */
  export type SpellUpdateManyArgs = {
    /**
     * The data used to update Spells.
     * 
    **/
    data: XOR<SpellUpdateManyMutationInput, SpellUncheckedUpdateManyInput>
    /**
     * Filter which Spells to update
     * 
    **/
    where?: SpellWhereInput
  }


  /**
   * Spell upsert
   */
  export type SpellUpsertArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * The filter to search for the Spell to update in case it exists.
     * 
    **/
    where: SpellWhereUniqueInput
    /**
     * In case the Spell found by the `where` argument doesn't exist, create a new Spell with this data.
     * 
    **/
    create: XOR<SpellCreateInput, SpellUncheckedCreateInput>
    /**
     * In case the Spell was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SpellUpdateInput, SpellUncheckedUpdateInput>
  }


  /**
   * Spell delete
   */
  export type SpellDeleteArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
    /**
     * Filter which Spell to delete.
     * 
    **/
    where: SpellWhereUniqueInput
  }


  /**
   * Spell deleteMany
   */
  export type SpellDeleteManyArgs = {
    /**
     * Filter which Spells to delete
     * 
    **/
    where?: SpellWhereInput
  }


  /**
   * Spell without action
   */
  export type SpellArgs = {
    /**
     * Select specific fields to fetch from the Spell
     * 
    **/
    select?: SpellSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SpellScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    school: 'school',
    text: 'text',
    atHigherLevels: 'atHigherLevels',
    verbal: 'verbal',
    somatic: 'somatic',
    material: 'material',
    cost: 'cost',
    concentration: 'concentration',
    ritual: 'ritual'
  };

  export type SpellScalarFieldEnum = (typeof SpellScalarFieldEnum)[keyof typeof SpellScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type SpellWhereInput = {
    AND?: Enumerable<SpellWhereInput>
    OR?: Enumerable<SpellWhereInput>
    NOT?: Enumerable<SpellWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    level?: EnumLevelFilter | Level
    school?: EnumSchoolFilter | School
    text?: StringFilter | string
    atHigherLevels?: StringNullableFilter | string | null
    verbal?: BoolFilter | boolean
    somatic?: BoolFilter | boolean
    material?: BoolFilter | boolean
    cost?: StringNullableFilter | string | null
    concentration?: BoolFilter | boolean
    ritual?: BoolFilter | boolean
  }

  export type SpellOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    school?: SortOrder
    text?: SortOrder
    atHigherLevels?: SortOrder
    verbal?: SortOrder
    somatic?: SortOrder
    material?: SortOrder
    cost?: SortOrder
    concentration?: SortOrder
    ritual?: SortOrder
  }

  export type SpellWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type SpellOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    school?: SortOrder
    text?: SortOrder
    atHigherLevels?: SortOrder
    verbal?: SortOrder
    somatic?: SortOrder
    material?: SortOrder
    cost?: SortOrder
    concentration?: SortOrder
    ritual?: SortOrder
    _count?: SpellCountOrderByAggregateInput
    _avg?: SpellAvgOrderByAggregateInput
    _max?: SpellMaxOrderByAggregateInput
    _min?: SpellMinOrderByAggregateInput
    _sum?: SpellSumOrderByAggregateInput
  }

  export type SpellScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpellScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpellScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpellScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    level?: EnumLevelWithAggregatesFilter | Level
    school?: EnumSchoolWithAggregatesFilter | School
    text?: StringWithAggregatesFilter | string
    atHigherLevels?: StringNullableWithAggregatesFilter | string | null
    verbal?: BoolWithAggregatesFilter | boolean
    somatic?: BoolWithAggregatesFilter | boolean
    material?: BoolWithAggregatesFilter | boolean
    cost?: StringNullableWithAggregatesFilter | string | null
    concentration?: BoolWithAggregatesFilter | boolean
    ritual?: BoolWithAggregatesFilter | boolean
  }

  export type SpellCreateInput = {
    name: string
    level: Level
    school: School
    text: string
    atHigherLevels?: string | null
    verbal: boolean
    somatic: boolean
    material: boolean
    cost?: string | null
    concentration: boolean
    ritual: boolean
  }

  export type SpellUncheckedCreateInput = {
    id?: number
    name: string
    level: Level
    school: School
    text: string
    atHigherLevels?: string | null
    verbal: boolean
    somatic: boolean
    material: boolean
    cost?: string | null
    concentration: boolean
    ritual: boolean
  }

  export type SpellUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | Level
    school?: EnumSchoolFieldUpdateOperationsInput | School
    text?: StringFieldUpdateOperationsInput | string
    atHigherLevels?: NullableStringFieldUpdateOperationsInput | string | null
    verbal?: BoolFieldUpdateOperationsInput | boolean
    somatic?: BoolFieldUpdateOperationsInput | boolean
    material?: BoolFieldUpdateOperationsInput | boolean
    cost?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: BoolFieldUpdateOperationsInput | boolean
    ritual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SpellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | Level
    school?: EnumSchoolFieldUpdateOperationsInput | School
    text?: StringFieldUpdateOperationsInput | string
    atHigherLevels?: NullableStringFieldUpdateOperationsInput | string | null
    verbal?: BoolFieldUpdateOperationsInput | boolean
    somatic?: BoolFieldUpdateOperationsInput | boolean
    material?: BoolFieldUpdateOperationsInput | boolean
    cost?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: BoolFieldUpdateOperationsInput | boolean
    ritual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SpellCreateManyInput = {
    id?: number
    name: string
    level: Level
    school: School
    text: string
    atHigherLevels?: string | null
    verbal: boolean
    somatic: boolean
    material: boolean
    cost?: string | null
    concentration: boolean
    ritual: boolean
  }

  export type SpellUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | Level
    school?: EnumSchoolFieldUpdateOperationsInput | School
    text?: StringFieldUpdateOperationsInput | string
    atHigherLevels?: NullableStringFieldUpdateOperationsInput | string | null
    verbal?: BoolFieldUpdateOperationsInput | boolean
    somatic?: BoolFieldUpdateOperationsInput | boolean
    material?: BoolFieldUpdateOperationsInput | boolean
    cost?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: BoolFieldUpdateOperationsInput | boolean
    ritual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SpellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | Level
    school?: EnumSchoolFieldUpdateOperationsInput | School
    text?: StringFieldUpdateOperationsInput | string
    atHigherLevels?: NullableStringFieldUpdateOperationsInput | string | null
    verbal?: BoolFieldUpdateOperationsInput | boolean
    somatic?: BoolFieldUpdateOperationsInput | boolean
    material?: BoolFieldUpdateOperationsInput | boolean
    cost?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: BoolFieldUpdateOperationsInput | boolean
    ritual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumLevelFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelFilter | Level
  }

  export type EnumSchoolFilter = {
    equals?: School
    in?: Enumerable<School>
    notIn?: Enumerable<School>
    not?: NestedEnumSchoolFilter | School
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type SpellCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    school?: SortOrder
    text?: SortOrder
    atHigherLevels?: SortOrder
    verbal?: SortOrder
    somatic?: SortOrder
    material?: SortOrder
    cost?: SortOrder
    concentration?: SortOrder
    ritual?: SortOrder
  }

  export type SpellAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpellMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    school?: SortOrder
    text?: SortOrder
    atHigherLevels?: SortOrder
    verbal?: SortOrder
    somatic?: SortOrder
    material?: SortOrder
    cost?: SortOrder
    concentration?: SortOrder
    ritual?: SortOrder
  }

  export type SpellMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    school?: SortOrder
    text?: SortOrder
    atHigherLevels?: SortOrder
    verbal?: SortOrder
    somatic?: SortOrder
    material?: SortOrder
    cost?: SortOrder
    concentration?: SortOrder
    ritual?: SortOrder
  }

  export type SpellSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumLevelWithAggregatesFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelWithAggregatesFilter | Level
    _count?: NestedIntFilter
    _min?: NestedEnumLevelFilter
    _max?: NestedEnumLevelFilter
  }

  export type EnumSchoolWithAggregatesFilter = {
    equals?: School
    in?: Enumerable<School>
    notIn?: Enumerable<School>
    not?: NestedEnumSchoolWithAggregatesFilter | School
    _count?: NestedIntFilter
    _min?: NestedEnumSchoolFilter
    _max?: NestedEnumSchoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: Level
  }

  export type EnumSchoolFieldUpdateOperationsInput = {
    set?: School
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumLevelFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelFilter | Level
  }

  export type NestedEnumSchoolFilter = {
    equals?: School
    in?: Enumerable<School>
    notIn?: Enumerable<School>
    not?: NestedEnumSchoolFilter | School
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumLevelWithAggregatesFilter = {
    equals?: Level
    in?: Enumerable<Level>
    notIn?: Enumerable<Level>
    not?: NestedEnumLevelWithAggregatesFilter | Level
    _count?: NestedIntFilter
    _min?: NestedEnumLevelFilter
    _max?: NestedEnumLevelFilter
  }

  export type NestedEnumSchoolWithAggregatesFilter = {
    equals?: School
    in?: Enumerable<School>
    notIn?: Enumerable<School>
    not?: NestedEnumSchoolWithAggregatesFilter | School
    _count?: NestedIntFilter
    _min?: NestedEnumSchoolFilter
    _max?: NestedEnumSchoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}