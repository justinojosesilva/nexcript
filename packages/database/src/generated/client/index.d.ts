
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model ChannelProfile
 * 
 */
export type ChannelProfile = $Result.DefaultSelection<Prisma.$ChannelProfilePayload>
/**
 * Model ContentProject
 * 
 */
export type ContentProject = $Result.DefaultSelection<Prisma.$ContentProjectPayload>
/**
 * Model TrendAnalysis
 * 
 */
export type TrendAnalysis = $Result.DefaultSelection<Prisma.$TrendAnalysisPayload>
/**
 * Model Script
 * 
 */
export type Script = $Result.DefaultSelection<Prisma.$ScriptPayload>
/**
 * Model Narration
 * 
 */
export type Narration = $Result.DefaultSelection<Prisma.$NarrationPayload>
/**
 * Model MediaSuggestion
 * 
 */
export type MediaSuggestion = $Result.DefaultSelection<Prisma.$MediaSuggestionPayload>
/**
 * Model PublicationMetadata
 * 
 */
export type PublicationMetadata = $Result.DefaultSelection<Prisma.$PublicationMetadataPayload>
/**
 * Model ExportJob
 * 
 */
export type ExportJob = $Result.DefaultSelection<Prisma.$ExportJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NicheCategory: {
  finance: 'finance',
  technology: 'technology',
  productivity: 'productivity',
  lifestyle: 'lifestyle',
  education: 'education',
  entertainment: 'entertainment',
  business: 'business',
  health: 'health',
  personal_development: 'personal_development',
  other: 'other'
};

export type NicheCategory = (typeof NicheCategory)[keyof typeof NicheCategory]


export const FormatType: {
  long_form: 'long_form',
  medium_form: 'medium_form',
  short_form: 'short_form',
  carousel: 'carousel',
  podcast: 'podcast'
};

export type FormatType = (typeof FormatType)[keyof typeof FormatType]


export const Platform: {
  youtube: 'youtube',
  youtube_shorts: 'youtube_shorts',
  tiktok: 'tiktok',
  instagram_reels: 'instagram_reels',
  instagram: 'instagram',
  linkedin: 'linkedin',
  podcast: 'podcast'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const ContentTone: {
  formal: 'formal',
  casual: 'casual',
  funny: 'funny',
  serious: 'serious',
  inspirational: 'inspirational',
  educational: 'educational',
  dark_comedy: 'dark_comedy',
  sarcastic: 'sarcastic'
};

export type ContentTone = (typeof ContentTone)[keyof typeof ContentTone]


export const NarrationStyle: {
  professional: 'professional',
  conversational: 'conversational',
  energetic: 'energetic',
  calm: 'calm',
  dramatic: 'dramatic',
  friendly: 'friendly'
};

export type NarrationStyle = (typeof NarrationStyle)[keyof typeof NarrationStyle]


export const ProjectStatus: {
  planning: 'planning',
  in_development: 'in_development',
  in_review: 'in_review',
  active: 'active',
  paused: 'paused',
  archived: 'archived'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const JobStatus: {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  failed: 'failed',
  cancelled: 'cancelled'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const TtsProvider: {
  google: 'google',
  microsoft: 'microsoft',
  eleven_labs: 'eleven_labs',
  amazon: 'amazon',
  openai: 'openai',
  local: 'local'
};

export type TtsProvider = (typeof TtsProvider)[keyof typeof TtsProvider]


export const AssetType: {
  script: 'script',
  title: 'title',
  thumbnail: 'thumbnail',
  description: 'description',
  narration: 'narration',
  video: 'video',
  thumbnail_image: 'thumbnail_image',
  metadata: 'metadata'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]


export const RpmTier: {
  tier_0: 'tier_0',
  tier_1: 'tier_1',
  tier_2: 'tier_2',
  tier_3: 'tier_3',
  tier_4: 'tier_4'
};

export type RpmTier = (typeof RpmTier)[keyof typeof RpmTier]


export const Plan: {
  free: 'free',
  starter: 'starter',
  professional: 'professional',
  enterprise: 'enterprise'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const Role: {
  admin: 'admin',
  manager: 'manager',
  creator: 'creator',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type NicheCategory = $Enums.NicheCategory

export const NicheCategory: typeof $Enums.NicheCategory

export type FormatType = $Enums.FormatType

export const FormatType: typeof $Enums.FormatType

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type ContentTone = $Enums.ContentTone

export const ContentTone: typeof $Enums.ContentTone

export type NarrationStyle = $Enums.NarrationStyle

export const NarrationStyle: typeof $Enums.NarrationStyle

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type TtsProvider = $Enums.TtsProvider

export const TtsProvider: typeof $Enums.TtsProvider

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

export type RpmTier = $Enums.RpmTier

export const RpmTier: typeof $Enums.RpmTier

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelProfile`: Exposes CRUD operations for the **ChannelProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelProfiles
    * const channelProfiles = await prisma.channelProfile.findMany()
    * ```
    */
  get channelProfile(): Prisma.ChannelProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentProject`: Exposes CRUD operations for the **ContentProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentProjects
    * const contentProjects = await prisma.contentProject.findMany()
    * ```
    */
  get contentProject(): Prisma.ContentProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trendAnalysis`: Exposes CRUD operations for the **TrendAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendAnalyses
    * const trendAnalyses = await prisma.trendAnalysis.findMany()
    * ```
    */
  get trendAnalysis(): Prisma.TrendAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.script`: Exposes CRUD operations for the **Script** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scripts
    * const scripts = await prisma.script.findMany()
    * ```
    */
  get script(): Prisma.ScriptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.narration`: Exposes CRUD operations for the **Narration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Narrations
    * const narrations = await prisma.narration.findMany()
    * ```
    */
  get narration(): Prisma.NarrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaSuggestion`: Exposes CRUD operations for the **MediaSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaSuggestions
    * const mediaSuggestions = await prisma.mediaSuggestion.findMany()
    * ```
    */
  get mediaSuggestion(): Prisma.MediaSuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicationMetadata`: Exposes CRUD operations for the **PublicationMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationMetadata
    * const publicationMetadata = await prisma.publicationMetadata.findMany()
    * ```
    */
  get publicationMetadata(): Prisma.PublicationMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exportJob`: Exposes CRUD operations for the **ExportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExportJobs
    * const exportJobs = await prisma.exportJob.findMany()
    * ```
    */
  get exportJob(): Prisma.ExportJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    RefreshToken: 'RefreshToken',
    ChannelProfile: 'ChannelProfile',
    ContentProject: 'ContentProject',
    TrendAnalysis: 'TrendAnalysis',
    Script: 'Script',
    Narration: 'Narration',
    MediaSuggestion: 'MediaSuggestion',
    PublicationMetadata: 'PublicationMetadata',
    ExportJob: 'ExportJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "user" | "refreshToken" | "channelProfile" | "contentProject" | "trendAnalysis" | "script" | "narration" | "mediaSuggestion" | "publicationMetadata" | "exportJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      ChannelProfile: {
        payload: Prisma.$ChannelProfilePayload<ExtArgs>
        fields: Prisma.ChannelProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          findFirst: {
            args: Prisma.ChannelProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          findMany: {
            args: Prisma.ChannelProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>[]
          }
          create: {
            args: Prisma.ChannelProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          createMany: {
            args: Prisma.ChannelProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>[]
          }
          delete: {
            args: Prisma.ChannelProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          update: {
            args: Prisma.ChannelProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          deleteMany: {
            args: Prisma.ChannelProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>[]
          }
          upsert: {
            args: Prisma.ChannelProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelProfilePayload>
          }
          aggregate: {
            args: Prisma.ChannelProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelProfile>
          }
          groupBy: {
            args: Prisma.ChannelProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelProfileCountAggregateOutputType> | number
          }
        }
      }
      ContentProject: {
        payload: Prisma.$ContentProjectPayload<ExtArgs>
        fields: Prisma.ContentProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          findFirst: {
            args: Prisma.ContentProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          findMany: {
            args: Prisma.ContentProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>[]
          }
          create: {
            args: Prisma.ContentProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          createMany: {
            args: Prisma.ContentProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>[]
          }
          delete: {
            args: Prisma.ContentProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          update: {
            args: Prisma.ContentProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          deleteMany: {
            args: Prisma.ContentProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>[]
          }
          upsert: {
            args: Prisma.ContentProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentProjectPayload>
          }
          aggregate: {
            args: Prisma.ContentProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentProject>
          }
          groupBy: {
            args: Prisma.ContentProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ContentProjectCountAggregateOutputType> | number
          }
        }
      }
      TrendAnalysis: {
        payload: Prisma.$TrendAnalysisPayload<ExtArgs>
        fields: Prisma.TrendAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          findFirst: {
            args: Prisma.TrendAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          findMany: {
            args: Prisma.TrendAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>[]
          }
          create: {
            args: Prisma.TrendAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          createMany: {
            args: Prisma.TrendAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrendAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>[]
          }
          delete: {
            args: Prisma.TrendAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          update: {
            args: Prisma.TrendAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.TrendAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrendAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.TrendAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendAnalysisPayload>
          }
          aggregate: {
            args: Prisma.TrendAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendAnalysis>
          }
          groupBy: {
            args: Prisma.TrendAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<TrendAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Script: {
        payload: Prisma.$ScriptPayload<ExtArgs>
        fields: Prisma.ScriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          findFirst: {
            args: Prisma.ScriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          findMany: {
            args: Prisma.ScriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          create: {
            args: Prisma.ScriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          createMany: {
            args: Prisma.ScriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          delete: {
            args: Prisma.ScriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          update: {
            args: Prisma.ScriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          deleteMany: {
            args: Prisma.ScriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScriptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>[]
          }
          upsert: {
            args: Prisma.ScriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptPayload>
          }
          aggregate: {
            args: Prisma.ScriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScript>
          }
          groupBy: {
            args: Prisma.ScriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScriptCountArgs<ExtArgs>
            result: $Utils.Optional<ScriptCountAggregateOutputType> | number
          }
        }
      }
      Narration: {
        payload: Prisma.$NarrationPayload<ExtArgs>
        fields: Prisma.NarrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NarrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NarrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          findFirst: {
            args: Prisma.NarrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NarrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          findMany: {
            args: Prisma.NarrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>[]
          }
          create: {
            args: Prisma.NarrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          createMany: {
            args: Prisma.NarrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NarrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>[]
          }
          delete: {
            args: Prisma.NarrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          update: {
            args: Prisma.NarrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          deleteMany: {
            args: Prisma.NarrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NarrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NarrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>[]
          }
          upsert: {
            args: Prisma.NarrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrationPayload>
          }
          aggregate: {
            args: Prisma.NarrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNarration>
          }
          groupBy: {
            args: Prisma.NarrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NarrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NarrationCountArgs<ExtArgs>
            result: $Utils.Optional<NarrationCountAggregateOutputType> | number
          }
        }
      }
      MediaSuggestion: {
        payload: Prisma.$MediaSuggestionPayload<ExtArgs>
        fields: Prisma.MediaSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaSuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaSuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          findFirst: {
            args: Prisma.MediaSuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaSuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          findMany: {
            args: Prisma.MediaSuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>[]
          }
          create: {
            args: Prisma.MediaSuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          createMany: {
            args: Prisma.MediaSuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaSuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>[]
          }
          delete: {
            args: Prisma.MediaSuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          update: {
            args: Prisma.MediaSuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.MediaSuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaSuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaSuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>[]
          }
          upsert: {
            args: Prisma.MediaSuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaSuggestionPayload>
          }
          aggregate: {
            args: Prisma.MediaSuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaSuggestion>
          }
          groupBy: {
            args: Prisma.MediaSuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaSuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<MediaSuggestionCountAggregateOutputType> | number
          }
        }
      }
      PublicationMetadata: {
        payload: Prisma.$PublicationMetadataPayload<ExtArgs>
        fields: Prisma.PublicationMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          findFirst: {
            args: Prisma.PublicationMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          findMany: {
            args: Prisma.PublicationMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>[]
          }
          create: {
            args: Prisma.PublicationMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          createMany: {
            args: Prisma.PublicationMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>[]
          }
          delete: {
            args: Prisma.PublicationMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          update: {
            args: Prisma.PublicationMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          deleteMany: {
            args: Prisma.PublicationMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>[]
          }
          upsert: {
            args: Prisma.PublicationMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationMetadataPayload>
          }
          aggregate: {
            args: Prisma.PublicationMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicationMetadata>
          }
          groupBy: {
            args: Prisma.PublicationMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationMetadataCountAggregateOutputType> | number
          }
        }
      }
      ExportJob: {
        payload: Prisma.$ExportJobPayload<ExtArgs>
        fields: Prisma.ExportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findFirst: {
            args: Prisma.ExportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findMany: {
            args: Prisma.ExportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          create: {
            args: Prisma.ExportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          createMany: {
            args: Prisma.ExportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          delete: {
            args: Prisma.ExportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          update: {
            args: Prisma.ExportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          deleteMany: {
            args: Prisma.ExportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          upsert: {
            args: Prisma.ExportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          aggregate: {
            args: Prisma.ExportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExportJob>
          }
          groupBy: {
            args: Prisma.ExportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportJobCountArgs<ExtArgs>
            result: $Utils.Optional<ExportJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    channelProfile?: ChannelProfileOmit
    contentProject?: ContentProjectOmit
    trendAnalysis?: TrendAnalysisOmit
    script?: ScriptOmit
    narration?: NarrationOmit
    mediaSuggestion?: MediaSuggestionOmit
    publicationMetadata?: PublicationMetadataOmit
    exportJob?: ExportJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    channelProfiles: number
    contentProjects: number
    trendAnalyses: number
    scripts: number
    narrations: number
    mediaSuggestions: number
    publicationMetadata: number
    exportJobs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    channelProfiles?: boolean | OrganizationCountOutputTypeCountChannelProfilesArgs
    contentProjects?: boolean | OrganizationCountOutputTypeCountContentProjectsArgs
    trendAnalyses?: boolean | OrganizationCountOutputTypeCountTrendAnalysesArgs
    scripts?: boolean | OrganizationCountOutputTypeCountScriptsArgs
    narrations?: boolean | OrganizationCountOutputTypeCountNarrationsArgs
    mediaSuggestions?: boolean | OrganizationCountOutputTypeCountMediaSuggestionsArgs
    publicationMetadata?: boolean | OrganizationCountOutputTypeCountPublicationMetadataArgs
    exportJobs?: boolean | OrganizationCountOutputTypeCountExportJobsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountChannelProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelProfileWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountContentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentProjectWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTrendAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendAnalysisWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountScriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountNarrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrationWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMediaSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaSuggestionWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPublicationMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationMetadataWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    channelProfiles: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelProfiles?: boolean | UserCountOutputTypeCountChannelProfilesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type ChannelProfileCountOutputType
   */

  export type ChannelProfileCountOutputType = {
    contentProjects: number
  }

  export type ChannelProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentProjects?: boolean | ChannelProfileCountOutputTypeCountContentProjectsArgs
  }

  // Custom InputTypes
  /**
   * ChannelProfileCountOutputType without action
   */
  export type ChannelProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfileCountOutputType
     */
    select?: ChannelProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelProfileCountOutputType without action
   */
  export type ChannelProfileCountOutputTypeCountContentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentProjectWhereInput
  }


  /**
   * Count Type ContentProjectCountOutputType
   */

  export type ContentProjectCountOutputType = {
    trendAnalyses: number
    scripts: number
    mediaSuggestions: number
    publicationMetadata: number
    exportJobs: number
  }

  export type ContentProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trendAnalyses?: boolean | ContentProjectCountOutputTypeCountTrendAnalysesArgs
    scripts?: boolean | ContentProjectCountOutputTypeCountScriptsArgs
    mediaSuggestions?: boolean | ContentProjectCountOutputTypeCountMediaSuggestionsArgs
    publicationMetadata?: boolean | ContentProjectCountOutputTypeCountPublicationMetadataArgs
    exportJobs?: boolean | ContentProjectCountOutputTypeCountExportJobsArgs
  }

  // Custom InputTypes
  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProjectCountOutputType
     */
    select?: ContentProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeCountTrendAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendAnalysisWhereInput
  }

  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeCountScriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
  }

  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeCountMediaSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaSuggestionWhereInput
  }

  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeCountPublicationMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationMetadataWhereInput
  }

  /**
   * ContentProjectCountOutputType without action
   */
  export type ContentProjectCountOutputTypeCountExportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
  }


  /**
   * Count Type ScriptCountOutputType
   */

  export type ScriptCountOutputType = {
    narrations: number
  }

  export type ScriptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    narrations?: boolean | ScriptCountOutputTypeCountNarrationsArgs
  }

  // Custom InputTypes
  /**
   * ScriptCountOutputType without action
   */
  export type ScriptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptCountOutputType
     */
    select?: ScriptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScriptCountOutputType without action
   */
  export type ScriptCountOutputTypeCountNarrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.Plan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.Plan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: $Enums.Plan
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    channelProfiles?: boolean | Organization$channelProfilesArgs<ExtArgs>
    contentProjects?: boolean | Organization$contentProjectsArgs<ExtArgs>
    trendAnalyses?: boolean | Organization$trendAnalysesArgs<ExtArgs>
    scripts?: boolean | Organization$scriptsArgs<ExtArgs>
    narrations?: boolean | Organization$narrationsArgs<ExtArgs>
    mediaSuggestions?: boolean | Organization$mediaSuggestionsArgs<ExtArgs>
    publicationMetadata?: boolean | Organization$publicationMetadataArgs<ExtArgs>
    exportJobs?: boolean | Organization$exportJobsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    channelProfiles?: boolean | Organization$channelProfilesArgs<ExtArgs>
    contentProjects?: boolean | Organization$contentProjectsArgs<ExtArgs>
    trendAnalyses?: boolean | Organization$trendAnalysesArgs<ExtArgs>
    scripts?: boolean | Organization$scriptsArgs<ExtArgs>
    narrations?: boolean | Organization$narrationsArgs<ExtArgs>
    mediaSuggestions?: boolean | Organization$mediaSuggestionsArgs<ExtArgs>
    publicationMetadata?: boolean | Organization$publicationMetadataArgs<ExtArgs>
    exportJobs?: boolean | Organization$exportJobsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      channelProfiles: Prisma.$ChannelProfilePayload<ExtArgs>[]
      contentProjects: Prisma.$ContentProjectPayload<ExtArgs>[]
      trendAnalyses: Prisma.$TrendAnalysisPayload<ExtArgs>[]
      scripts: Prisma.$ScriptPayload<ExtArgs>[]
      narrations: Prisma.$NarrationPayload<ExtArgs>[]
      mediaSuggestions: Prisma.$MediaSuggestionPayload<ExtArgs>[]
      publicationMetadata: Prisma.$PublicationMetadataPayload<ExtArgs>[]
      exportJobs: Prisma.$ExportJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: $Enums.Plan
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channelProfiles<T extends Organization$channelProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$channelProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentProjects<T extends Organization$contentProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$contentProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trendAnalyses<T extends Organization$trendAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$trendAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scripts<T extends Organization$scriptsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$scriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    narrations<T extends Organization$narrationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$narrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaSuggestions<T extends Organization$mediaSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$mediaSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicationMetadata<T extends Organization$publicationMetadataArgs<ExtArgs> = {}>(args?: Subset<T, Organization$publicationMetadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exportJobs<T extends Organization$exportJobsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$exportJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly plan: FieldRef<"Organization", 'Plan'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.channelProfiles
   */
  export type Organization$channelProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    where?: ChannelProfileWhereInput
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    cursor?: ChannelProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelProfileScalarFieldEnum | ChannelProfileScalarFieldEnum[]
  }

  /**
   * Organization.contentProjects
   */
  export type Organization$contentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    where?: ContentProjectWhereInput
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    cursor?: ContentProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentProjectScalarFieldEnum | ContentProjectScalarFieldEnum[]
  }

  /**
   * Organization.trendAnalyses
   */
  export type Organization$trendAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    where?: TrendAnalysisWhereInput
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    cursor?: TrendAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendAnalysisScalarFieldEnum | TrendAnalysisScalarFieldEnum[]
  }

  /**
   * Organization.scripts
   */
  export type Organization$scriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Organization.narrations
   */
  export type Organization$narrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    where?: NarrationWhereInput
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    cursor?: NarrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NarrationScalarFieldEnum | NarrationScalarFieldEnum[]
  }

  /**
   * Organization.mediaSuggestions
   */
  export type Organization$mediaSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    where?: MediaSuggestionWhereInput
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    cursor?: MediaSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaSuggestionScalarFieldEnum | MediaSuggestionScalarFieldEnum[]
  }

  /**
   * Organization.publicationMetadata
   */
  export type Organization$publicationMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    where?: PublicationMetadataWhereInput
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    cursor?: PublicationMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationMetadataScalarFieldEnum | PublicationMetadataScalarFieldEnum[]
  }

  /**
   * Organization.exportJobs
   */
  export type Organization$exportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    cursor?: ExportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    organizationId: number
    email: number
    name: number
    role: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    organizationId: string
    email: string
    name: string
    role: $Enums.Role
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfiles?: boolean | User$channelProfilesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    organizationId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "email" | "name" | "role" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfiles?: boolean | User$channelProfilesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      channelProfiles: Prisma.$ChannelProfilePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      email: string
      name: string
      role: $Enums.Role
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channelProfiles<T extends User$channelProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$channelProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.channelProfiles
   */
  export type User$channelProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    where?: ChannelProfileWhereInput
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    cursor?: ChannelProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelProfileScalarFieldEnum | ChannelProfileScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model ChannelProfile
   */

  export type AggregateChannelProfile = {
    _count: ChannelProfileCountAggregateOutputType | null
    _min: ChannelProfileMinAggregateOutputType | null
    _max: ChannelProfileMaxAggregateOutputType | null
  }

  export type ChannelProfileMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    name: string | null
    platform: $Enums.Platform | null
    niche: $Enums.NicheCategory | null
    tone: $Enums.ContentTone | null
    narrationStyle: $Enums.NarrationStyle | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelProfileMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    name: string | null
    platform: $Enums.Platform | null
    niche: $Enums.NicheCategory | null
    tone: $Enums.ContentTone | null
    narrationStyle: $Enums.NarrationStyle | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelProfileCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    name: number
    platform: number
    niche: number
    tone: number
    narrationStyle: number
    languageCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelProfileMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    name?: true
    platform?: true
    niche?: true
    tone?: true
    narrationStyle?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelProfileMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    name?: true
    platform?: true
    niche?: true
    tone?: true
    narrationStyle?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelProfileCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    name?: true
    platform?: true
    niche?: true
    tone?: true
    narrationStyle?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelProfile to aggregate.
     */
    where?: ChannelProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelProfiles to fetch.
     */
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelProfiles
    **/
    _count?: true | ChannelProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelProfileMaxAggregateInputType
  }

  export type GetChannelProfileAggregateType<T extends ChannelProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelProfile[P]>
      : GetScalarType<T[P], AggregateChannelProfile[P]>
  }




  export type ChannelProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelProfileWhereInput
    orderBy?: ChannelProfileOrderByWithAggregationInput | ChannelProfileOrderByWithAggregationInput[]
    by: ChannelProfileScalarFieldEnum[] | ChannelProfileScalarFieldEnum
    having?: ChannelProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelProfileCountAggregateInputType | true
    _min?: ChannelProfileMinAggregateInputType
    _max?: ChannelProfileMaxAggregateInputType
  }

  export type ChannelProfileGroupByOutputType = {
    id: string
    organizationId: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode: string
    createdAt: Date
    updatedAt: Date
    _count: ChannelProfileCountAggregateOutputType | null
    _min: ChannelProfileMinAggregateOutputType | null
    _max: ChannelProfileMaxAggregateOutputType | null
  }

  type GetChannelProfileGroupByPayload<T extends ChannelProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelProfileGroupByOutputType[P]>
        }
      >
    >


  export type ChannelProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    niche?: boolean
    tone?: boolean
    narrationStyle?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    contentProjects?: boolean | ChannelProfile$contentProjectsArgs<ExtArgs>
    _count?: boolean | ChannelProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelProfile"]>

  export type ChannelProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    niche?: boolean
    tone?: boolean
    narrationStyle?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelProfile"]>

  export type ChannelProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    niche?: boolean
    tone?: boolean
    narrationStyle?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelProfile"]>

  export type ChannelProfileSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    niche?: boolean
    tone?: boolean
    narrationStyle?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "userId" | "name" | "platform" | "niche" | "tone" | "narrationStyle" | "languageCode" | "createdAt" | "updatedAt", ExtArgs["result"]["channelProfile"]>
  export type ChannelProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    contentProjects?: boolean | ChannelProfile$contentProjectsArgs<ExtArgs>
    _count?: boolean | ChannelProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChannelProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelProfile"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      contentProjects: Prisma.$ContentProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      userId: string
      name: string
      platform: $Enums.Platform
      niche: $Enums.NicheCategory
      tone: $Enums.ContentTone
      narrationStyle: $Enums.NarrationStyle
      languageCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channelProfile"]>
    composites: {}
  }

  type ChannelProfileGetPayload<S extends boolean | null | undefined | ChannelProfileDefaultArgs> = $Result.GetResult<Prisma.$ChannelProfilePayload, S>

  type ChannelProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelProfileCountAggregateInputType | true
    }

  export interface ChannelProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelProfile'], meta: { name: 'ChannelProfile' } }
    /**
     * Find zero or one ChannelProfile that matches the filter.
     * @param {ChannelProfileFindUniqueArgs} args - Arguments to find a ChannelProfile
     * @example
     * // Get one ChannelProfile
     * const channelProfile = await prisma.channelProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelProfileFindUniqueArgs>(args: SelectSubset<T, ChannelProfileFindUniqueArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelProfileFindUniqueOrThrowArgs} args - Arguments to find a ChannelProfile
     * @example
     * // Get one ChannelProfile
     * const channelProfile = await prisma.channelProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileFindFirstArgs} args - Arguments to find a ChannelProfile
     * @example
     * // Get one ChannelProfile
     * const channelProfile = await prisma.channelProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelProfileFindFirstArgs>(args?: SelectSubset<T, ChannelProfileFindFirstArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileFindFirstOrThrowArgs} args - Arguments to find a ChannelProfile
     * @example
     * // Get one ChannelProfile
     * const channelProfile = await prisma.channelProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelProfiles
     * const channelProfiles = await prisma.channelProfile.findMany()
     * 
     * // Get first 10 ChannelProfiles
     * const channelProfiles = await prisma.channelProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelProfileWithIdOnly = await prisma.channelProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelProfileFindManyArgs>(args?: SelectSubset<T, ChannelProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelProfile.
     * @param {ChannelProfileCreateArgs} args - Arguments to create a ChannelProfile.
     * @example
     * // Create one ChannelProfile
     * const ChannelProfile = await prisma.channelProfile.create({
     *   data: {
     *     // ... data to create a ChannelProfile
     *   }
     * })
     * 
     */
    create<T extends ChannelProfileCreateArgs>(args: SelectSubset<T, ChannelProfileCreateArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelProfiles.
     * @param {ChannelProfileCreateManyArgs} args - Arguments to create many ChannelProfiles.
     * @example
     * // Create many ChannelProfiles
     * const channelProfile = await prisma.channelProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelProfileCreateManyArgs>(args?: SelectSubset<T, ChannelProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelProfiles and returns the data saved in the database.
     * @param {ChannelProfileCreateManyAndReturnArgs} args - Arguments to create many ChannelProfiles.
     * @example
     * // Create many ChannelProfiles
     * const channelProfile = await prisma.channelProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelProfiles and only return the `id`
     * const channelProfileWithIdOnly = await prisma.channelProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelProfile.
     * @param {ChannelProfileDeleteArgs} args - Arguments to delete one ChannelProfile.
     * @example
     * // Delete one ChannelProfile
     * const ChannelProfile = await prisma.channelProfile.delete({
     *   where: {
     *     // ... filter to delete one ChannelProfile
     *   }
     * })
     * 
     */
    delete<T extends ChannelProfileDeleteArgs>(args: SelectSubset<T, ChannelProfileDeleteArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelProfile.
     * @param {ChannelProfileUpdateArgs} args - Arguments to update one ChannelProfile.
     * @example
     * // Update one ChannelProfile
     * const channelProfile = await prisma.channelProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelProfileUpdateArgs>(args: SelectSubset<T, ChannelProfileUpdateArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelProfiles.
     * @param {ChannelProfileDeleteManyArgs} args - Arguments to filter ChannelProfiles to delete.
     * @example
     * // Delete a few ChannelProfiles
     * const { count } = await prisma.channelProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelProfileDeleteManyArgs>(args?: SelectSubset<T, ChannelProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelProfiles
     * const channelProfile = await prisma.channelProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelProfileUpdateManyArgs>(args: SelectSubset<T, ChannelProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelProfiles and returns the data updated in the database.
     * @param {ChannelProfileUpdateManyAndReturnArgs} args - Arguments to update many ChannelProfiles.
     * @example
     * // Update many ChannelProfiles
     * const channelProfile = await prisma.channelProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelProfiles and only return the `id`
     * const channelProfileWithIdOnly = await prisma.channelProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelProfile.
     * @param {ChannelProfileUpsertArgs} args - Arguments to update or create a ChannelProfile.
     * @example
     * // Update or create a ChannelProfile
     * const channelProfile = await prisma.channelProfile.upsert({
     *   create: {
     *     // ... data to create a ChannelProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelProfile we want to update
     *   }
     * })
     */
    upsert<T extends ChannelProfileUpsertArgs>(args: SelectSubset<T, ChannelProfileUpsertArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileCountArgs} args - Arguments to filter ChannelProfiles to count.
     * @example
     * // Count the number of ChannelProfiles
     * const count = await prisma.channelProfile.count({
     *   where: {
     *     // ... the filter for the ChannelProfiles we want to count
     *   }
     * })
    **/
    count<T extends ChannelProfileCountArgs>(
      args?: Subset<T, ChannelProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelProfileAggregateArgs>(args: Subset<T, ChannelProfileAggregateArgs>): Prisma.PrismaPromise<GetChannelProfileAggregateType<T>>

    /**
     * Group by ChannelProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelProfileGroupByArgs} args - Group by arguments.
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
      T extends ChannelProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelProfileGroupByArgs['orderBy'] }
        : { orderBy?: ChannelProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChannelProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelProfile model
   */
  readonly fields: ChannelProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProjects<T extends ChannelProfile$contentProjectsArgs<ExtArgs> = {}>(args?: Subset<T, ChannelProfile$contentProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChannelProfile model
   */
  interface ChannelProfileFieldRefs {
    readonly id: FieldRef<"ChannelProfile", 'String'>
    readonly organizationId: FieldRef<"ChannelProfile", 'String'>
    readonly userId: FieldRef<"ChannelProfile", 'String'>
    readonly name: FieldRef<"ChannelProfile", 'String'>
    readonly platform: FieldRef<"ChannelProfile", 'Platform'>
    readonly niche: FieldRef<"ChannelProfile", 'NicheCategory'>
    readonly tone: FieldRef<"ChannelProfile", 'ContentTone'>
    readonly narrationStyle: FieldRef<"ChannelProfile", 'NarrationStyle'>
    readonly languageCode: FieldRef<"ChannelProfile", 'String'>
    readonly createdAt: FieldRef<"ChannelProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ChannelProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChannelProfile findUnique
   */
  export type ChannelProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChannelProfile to fetch.
     */
    where: ChannelProfileWhereUniqueInput
  }

  /**
   * ChannelProfile findUniqueOrThrow
   */
  export type ChannelProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChannelProfile to fetch.
     */
    where: ChannelProfileWhereUniqueInput
  }

  /**
   * ChannelProfile findFirst
   */
  export type ChannelProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChannelProfile to fetch.
     */
    where?: ChannelProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelProfiles to fetch.
     */
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelProfiles.
     */
    cursor?: ChannelProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelProfiles.
     */
    distinct?: ChannelProfileScalarFieldEnum | ChannelProfileScalarFieldEnum[]
  }

  /**
   * ChannelProfile findFirstOrThrow
   */
  export type ChannelProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChannelProfile to fetch.
     */
    where?: ChannelProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelProfiles to fetch.
     */
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelProfiles.
     */
    cursor?: ChannelProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelProfiles.
     */
    distinct?: ChannelProfileScalarFieldEnum | ChannelProfileScalarFieldEnum[]
  }

  /**
   * ChannelProfile findMany
   */
  export type ChannelProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter, which ChannelProfiles to fetch.
     */
    where?: ChannelProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelProfiles to fetch.
     */
    orderBy?: ChannelProfileOrderByWithRelationInput | ChannelProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelProfiles.
     */
    cursor?: ChannelProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelProfiles.
     */
    distinct?: ChannelProfileScalarFieldEnum | ChannelProfileScalarFieldEnum[]
  }

  /**
   * ChannelProfile create
   */
  export type ChannelProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelProfile.
     */
    data: XOR<ChannelProfileCreateInput, ChannelProfileUncheckedCreateInput>
  }

  /**
   * ChannelProfile createMany
   */
  export type ChannelProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelProfiles.
     */
    data: ChannelProfileCreateManyInput | ChannelProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChannelProfile createManyAndReturn
   */
  export type ChannelProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelProfiles.
     */
    data: ChannelProfileCreateManyInput | ChannelProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelProfile update
   */
  export type ChannelProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelProfile.
     */
    data: XOR<ChannelProfileUpdateInput, ChannelProfileUncheckedUpdateInput>
    /**
     * Choose, which ChannelProfile to update.
     */
    where: ChannelProfileWhereUniqueInput
  }

  /**
   * ChannelProfile updateMany
   */
  export type ChannelProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelProfiles.
     */
    data: XOR<ChannelProfileUpdateManyMutationInput, ChannelProfileUncheckedUpdateManyInput>
    /**
     * Filter which ChannelProfiles to update
     */
    where?: ChannelProfileWhereInput
    /**
     * Limit how many ChannelProfiles to update.
     */
    limit?: number
  }

  /**
   * ChannelProfile updateManyAndReturn
   */
  export type ChannelProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * The data used to update ChannelProfiles.
     */
    data: XOR<ChannelProfileUpdateManyMutationInput, ChannelProfileUncheckedUpdateManyInput>
    /**
     * Filter which ChannelProfiles to update
     */
    where?: ChannelProfileWhereInput
    /**
     * Limit how many ChannelProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelProfile upsert
   */
  export type ChannelProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelProfile to update in case it exists.
     */
    where: ChannelProfileWhereUniqueInput
    /**
     * In case the ChannelProfile found by the `where` argument doesn't exist, create a new ChannelProfile with this data.
     */
    create: XOR<ChannelProfileCreateInput, ChannelProfileUncheckedCreateInput>
    /**
     * In case the ChannelProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelProfileUpdateInput, ChannelProfileUncheckedUpdateInput>
  }

  /**
   * ChannelProfile delete
   */
  export type ChannelProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
    /**
     * Filter which ChannelProfile to delete.
     */
    where: ChannelProfileWhereUniqueInput
  }

  /**
   * ChannelProfile deleteMany
   */
  export type ChannelProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelProfiles to delete
     */
    where?: ChannelProfileWhereInput
    /**
     * Limit how many ChannelProfiles to delete.
     */
    limit?: number
  }

  /**
   * ChannelProfile.contentProjects
   */
  export type ChannelProfile$contentProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    where?: ContentProjectWhereInput
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    cursor?: ContentProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentProjectScalarFieldEnum | ContentProjectScalarFieldEnum[]
  }

  /**
   * ChannelProfile without action
   */
  export type ChannelProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelProfile
     */
    select?: ChannelProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelProfile
     */
    omit?: ChannelProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelProfileInclude<ExtArgs> | null
  }


  /**
   * Model ContentProject
   */

  export type AggregateContentProject = {
    _count: ContentProjectCountAggregateOutputType | null
    _avg: ContentProjectAvgAggregateOutputType | null
    _sum: ContentProjectSumAggregateOutputType | null
    _min: ContentProjectMinAggregateOutputType | null
    _max: ContentProjectMaxAggregateOutputType | null
  }

  export type ContentProjectAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type ContentProjectSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type ContentProjectMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    channelProfileId: string | null
    title: string | null
    keyword: string | null
    niche: $Enums.NicheCategory | null
    format: $Enums.FormatType | null
    status: $Enums.ProjectStatus | null
    durationMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentProjectMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    channelProfileId: string | null
    title: string | null
    keyword: string | null
    niche: $Enums.NicheCategory | null
    format: $Enums.FormatType | null
    status: $Enums.ProjectStatus | null
    durationMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentProjectCountAggregateOutputType = {
    id: number
    organizationId: number
    channelProfileId: number
    title: number
    keyword: number
    niche: number
    format: number
    status: number
    durationMinutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentProjectAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type ContentProjectSumAggregateInputType = {
    durationMinutes?: true
  }

  export type ContentProjectMinAggregateInputType = {
    id?: true
    organizationId?: true
    channelProfileId?: true
    title?: true
    keyword?: true
    niche?: true
    format?: true
    status?: true
    durationMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentProjectMaxAggregateInputType = {
    id?: true
    organizationId?: true
    channelProfileId?: true
    title?: true
    keyword?: true
    niche?: true
    format?: true
    status?: true
    durationMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentProjectCountAggregateInputType = {
    id?: true
    organizationId?: true
    channelProfileId?: true
    title?: true
    keyword?: true
    niche?: true
    format?: true
    status?: true
    durationMinutes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentProject to aggregate.
     */
    where?: ContentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentProjects to fetch.
     */
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentProjects
    **/
    _count?: true | ContentProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentProjectMaxAggregateInputType
  }

  export type GetContentProjectAggregateType<T extends ContentProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateContentProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentProject[P]>
      : GetScalarType<T[P], AggregateContentProject[P]>
  }




  export type ContentProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentProjectWhereInput
    orderBy?: ContentProjectOrderByWithAggregationInput | ContentProjectOrderByWithAggregationInput[]
    by: ContentProjectScalarFieldEnum[] | ContentProjectScalarFieldEnum
    having?: ContentProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentProjectCountAggregateInputType | true
    _avg?: ContentProjectAvgAggregateInputType
    _sum?: ContentProjectSumAggregateInputType
    _min?: ContentProjectMinAggregateInputType
    _max?: ContentProjectMaxAggregateInputType
  }

  export type ContentProjectGroupByOutputType = {
    id: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status: $Enums.ProjectStatus
    durationMinutes: number | null
    createdAt: Date
    updatedAt: Date
    _count: ContentProjectCountAggregateOutputType | null
    _avg: ContentProjectAvgAggregateOutputType | null
    _sum: ContentProjectSumAggregateOutputType | null
    _min: ContentProjectMinAggregateOutputType | null
    _max: ContentProjectMaxAggregateOutputType | null
  }

  type GetContentProjectGroupByPayload<T extends ContentProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ContentProjectGroupByOutputType[P]>
        }
      >
    >


  export type ContentProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    channelProfileId?: boolean
    title?: boolean
    keyword?: boolean
    niche?: boolean
    format?: boolean
    status?: boolean
    durationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
    trendAnalyses?: boolean | ContentProject$trendAnalysesArgs<ExtArgs>
    scripts?: boolean | ContentProject$scriptsArgs<ExtArgs>
    mediaSuggestions?: boolean | ContentProject$mediaSuggestionsArgs<ExtArgs>
    publicationMetadata?: boolean | ContentProject$publicationMetadataArgs<ExtArgs>
    exportJobs?: boolean | ContentProject$exportJobsArgs<ExtArgs>
    _count?: boolean | ContentProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentProject"]>

  export type ContentProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    channelProfileId?: boolean
    title?: boolean
    keyword?: boolean
    niche?: boolean
    format?: boolean
    status?: boolean
    durationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentProject"]>

  export type ContentProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    channelProfileId?: boolean
    title?: boolean
    keyword?: boolean
    niche?: boolean
    format?: boolean
    status?: boolean
    durationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentProject"]>

  export type ContentProjectSelectScalar = {
    id?: boolean
    organizationId?: boolean
    channelProfileId?: boolean
    title?: boolean
    keyword?: boolean
    niche?: boolean
    format?: boolean
    status?: boolean
    durationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "channelProfileId" | "title" | "keyword" | "niche" | "format" | "status" | "durationMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["contentProject"]>
  export type ContentProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
    trendAnalyses?: boolean | ContentProject$trendAnalysesArgs<ExtArgs>
    scripts?: boolean | ContentProject$scriptsArgs<ExtArgs>
    mediaSuggestions?: boolean | ContentProject$mediaSuggestionsArgs<ExtArgs>
    publicationMetadata?: boolean | ContentProject$publicationMetadataArgs<ExtArgs>
    exportJobs?: boolean | ContentProject$exportJobsArgs<ExtArgs>
    _count?: boolean | ContentProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
  }
  export type ContentProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    channelProfile?: boolean | ChannelProfileDefaultArgs<ExtArgs>
  }

  export type $ContentProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentProject"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      channelProfile: Prisma.$ChannelProfilePayload<ExtArgs>
      trendAnalyses: Prisma.$TrendAnalysisPayload<ExtArgs>[]
      scripts: Prisma.$ScriptPayload<ExtArgs>[]
      mediaSuggestions: Prisma.$MediaSuggestionPayload<ExtArgs>[]
      publicationMetadata: Prisma.$PublicationMetadataPayload<ExtArgs>[]
      exportJobs: Prisma.$ExportJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      channelProfileId: string
      title: string
      keyword: string
      niche: $Enums.NicheCategory
      format: $Enums.FormatType
      status: $Enums.ProjectStatus
      durationMinutes: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentProject"]>
    composites: {}
  }

  type ContentProjectGetPayload<S extends boolean | null | undefined | ContentProjectDefaultArgs> = $Result.GetResult<Prisma.$ContentProjectPayload, S>

  type ContentProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentProjectCountAggregateInputType | true
    }

  export interface ContentProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentProject'], meta: { name: 'ContentProject' } }
    /**
     * Find zero or one ContentProject that matches the filter.
     * @param {ContentProjectFindUniqueArgs} args - Arguments to find a ContentProject
     * @example
     * // Get one ContentProject
     * const contentProject = await prisma.contentProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentProjectFindUniqueArgs>(args: SelectSubset<T, ContentProjectFindUniqueArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentProjectFindUniqueOrThrowArgs} args - Arguments to find a ContentProject
     * @example
     * // Get one ContentProject
     * const contentProject = await prisma.contentProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectFindFirstArgs} args - Arguments to find a ContentProject
     * @example
     * // Get one ContentProject
     * const contentProject = await prisma.contentProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentProjectFindFirstArgs>(args?: SelectSubset<T, ContentProjectFindFirstArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectFindFirstOrThrowArgs} args - Arguments to find a ContentProject
     * @example
     * // Get one ContentProject
     * const contentProject = await prisma.contentProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentProjects
     * const contentProjects = await prisma.contentProject.findMany()
     * 
     * // Get first 10 ContentProjects
     * const contentProjects = await prisma.contentProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentProjectWithIdOnly = await prisma.contentProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentProjectFindManyArgs>(args?: SelectSubset<T, ContentProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentProject.
     * @param {ContentProjectCreateArgs} args - Arguments to create a ContentProject.
     * @example
     * // Create one ContentProject
     * const ContentProject = await prisma.contentProject.create({
     *   data: {
     *     // ... data to create a ContentProject
     *   }
     * })
     * 
     */
    create<T extends ContentProjectCreateArgs>(args: SelectSubset<T, ContentProjectCreateArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentProjects.
     * @param {ContentProjectCreateManyArgs} args - Arguments to create many ContentProjects.
     * @example
     * // Create many ContentProjects
     * const contentProject = await prisma.contentProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentProjectCreateManyArgs>(args?: SelectSubset<T, ContentProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentProjects and returns the data saved in the database.
     * @param {ContentProjectCreateManyAndReturnArgs} args - Arguments to create many ContentProjects.
     * @example
     * // Create many ContentProjects
     * const contentProject = await prisma.contentProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentProjects and only return the `id`
     * const contentProjectWithIdOnly = await prisma.contentProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentProject.
     * @param {ContentProjectDeleteArgs} args - Arguments to delete one ContentProject.
     * @example
     * // Delete one ContentProject
     * const ContentProject = await prisma.contentProject.delete({
     *   where: {
     *     // ... filter to delete one ContentProject
     *   }
     * })
     * 
     */
    delete<T extends ContentProjectDeleteArgs>(args: SelectSubset<T, ContentProjectDeleteArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentProject.
     * @param {ContentProjectUpdateArgs} args - Arguments to update one ContentProject.
     * @example
     * // Update one ContentProject
     * const contentProject = await prisma.contentProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentProjectUpdateArgs>(args: SelectSubset<T, ContentProjectUpdateArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentProjects.
     * @param {ContentProjectDeleteManyArgs} args - Arguments to filter ContentProjects to delete.
     * @example
     * // Delete a few ContentProjects
     * const { count } = await prisma.contentProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentProjectDeleteManyArgs>(args?: SelectSubset<T, ContentProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentProjects
     * const contentProject = await prisma.contentProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentProjectUpdateManyArgs>(args: SelectSubset<T, ContentProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentProjects and returns the data updated in the database.
     * @param {ContentProjectUpdateManyAndReturnArgs} args - Arguments to update many ContentProjects.
     * @example
     * // Update many ContentProjects
     * const contentProject = await prisma.contentProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentProjects and only return the `id`
     * const contentProjectWithIdOnly = await prisma.contentProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentProject.
     * @param {ContentProjectUpsertArgs} args - Arguments to update or create a ContentProject.
     * @example
     * // Update or create a ContentProject
     * const contentProject = await prisma.contentProject.upsert({
     *   create: {
     *     // ... data to create a ContentProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentProject we want to update
     *   }
     * })
     */
    upsert<T extends ContentProjectUpsertArgs>(args: SelectSubset<T, ContentProjectUpsertArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectCountArgs} args - Arguments to filter ContentProjects to count.
     * @example
     * // Count the number of ContentProjects
     * const count = await prisma.contentProject.count({
     *   where: {
     *     // ... the filter for the ContentProjects we want to count
     *   }
     * })
    **/
    count<T extends ContentProjectCountArgs>(
      args?: Subset<T, ContentProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentProjectAggregateArgs>(args: Subset<T, ContentProjectAggregateArgs>): Prisma.PrismaPromise<GetContentProjectAggregateType<T>>

    /**
     * Group by ContentProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentProjectGroupByArgs} args - Group by arguments.
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
      T extends ContentProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentProjectGroupByArgs['orderBy'] }
        : { orderBy?: ContentProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContentProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentProject model
   */
  readonly fields: ContentProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channelProfile<T extends ChannelProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelProfileDefaultArgs<ExtArgs>>): Prisma__ChannelProfileClient<$Result.GetResult<Prisma.$ChannelProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trendAnalyses<T extends ContentProject$trendAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, ContentProject$trendAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scripts<T extends ContentProject$scriptsArgs<ExtArgs> = {}>(args?: Subset<T, ContentProject$scriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaSuggestions<T extends ContentProject$mediaSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, ContentProject$mediaSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicationMetadata<T extends ContentProject$publicationMetadataArgs<ExtArgs> = {}>(args?: Subset<T, ContentProject$publicationMetadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exportJobs<T extends ContentProject$exportJobsArgs<ExtArgs> = {}>(args?: Subset<T, ContentProject$exportJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentProject model
   */
  interface ContentProjectFieldRefs {
    readonly id: FieldRef<"ContentProject", 'String'>
    readonly organizationId: FieldRef<"ContentProject", 'String'>
    readonly channelProfileId: FieldRef<"ContentProject", 'String'>
    readonly title: FieldRef<"ContentProject", 'String'>
    readonly keyword: FieldRef<"ContentProject", 'String'>
    readonly niche: FieldRef<"ContentProject", 'NicheCategory'>
    readonly format: FieldRef<"ContentProject", 'FormatType'>
    readonly status: FieldRef<"ContentProject", 'ProjectStatus'>
    readonly durationMinutes: FieldRef<"ContentProject", 'Int'>
    readonly createdAt: FieldRef<"ContentProject", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentProject findUnique
   */
  export type ContentProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter, which ContentProject to fetch.
     */
    where: ContentProjectWhereUniqueInput
  }

  /**
   * ContentProject findUniqueOrThrow
   */
  export type ContentProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter, which ContentProject to fetch.
     */
    where: ContentProjectWhereUniqueInput
  }

  /**
   * ContentProject findFirst
   */
  export type ContentProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter, which ContentProject to fetch.
     */
    where?: ContentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentProjects to fetch.
     */
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentProjects.
     */
    cursor?: ContentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentProjects.
     */
    distinct?: ContentProjectScalarFieldEnum | ContentProjectScalarFieldEnum[]
  }

  /**
   * ContentProject findFirstOrThrow
   */
  export type ContentProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter, which ContentProject to fetch.
     */
    where?: ContentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentProjects to fetch.
     */
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentProjects.
     */
    cursor?: ContentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentProjects.
     */
    distinct?: ContentProjectScalarFieldEnum | ContentProjectScalarFieldEnum[]
  }

  /**
   * ContentProject findMany
   */
  export type ContentProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter, which ContentProjects to fetch.
     */
    where?: ContentProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentProjects to fetch.
     */
    orderBy?: ContentProjectOrderByWithRelationInput | ContentProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentProjects.
     */
    cursor?: ContentProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentProjects.
     */
    distinct?: ContentProjectScalarFieldEnum | ContentProjectScalarFieldEnum[]
  }

  /**
   * ContentProject create
   */
  export type ContentProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentProject.
     */
    data: XOR<ContentProjectCreateInput, ContentProjectUncheckedCreateInput>
  }

  /**
   * ContentProject createMany
   */
  export type ContentProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentProjects.
     */
    data: ContentProjectCreateManyInput | ContentProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentProject createManyAndReturn
   */
  export type ContentProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * The data used to create many ContentProjects.
     */
    data: ContentProjectCreateManyInput | ContentProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentProject update
   */
  export type ContentProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentProject.
     */
    data: XOR<ContentProjectUpdateInput, ContentProjectUncheckedUpdateInput>
    /**
     * Choose, which ContentProject to update.
     */
    where: ContentProjectWhereUniqueInput
  }

  /**
   * ContentProject updateMany
   */
  export type ContentProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentProjects.
     */
    data: XOR<ContentProjectUpdateManyMutationInput, ContentProjectUncheckedUpdateManyInput>
    /**
     * Filter which ContentProjects to update
     */
    where?: ContentProjectWhereInput
    /**
     * Limit how many ContentProjects to update.
     */
    limit?: number
  }

  /**
   * ContentProject updateManyAndReturn
   */
  export type ContentProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * The data used to update ContentProjects.
     */
    data: XOR<ContentProjectUpdateManyMutationInput, ContentProjectUncheckedUpdateManyInput>
    /**
     * Filter which ContentProjects to update
     */
    where?: ContentProjectWhereInput
    /**
     * Limit how many ContentProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentProject upsert
   */
  export type ContentProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentProject to update in case it exists.
     */
    where: ContentProjectWhereUniqueInput
    /**
     * In case the ContentProject found by the `where` argument doesn't exist, create a new ContentProject with this data.
     */
    create: XOR<ContentProjectCreateInput, ContentProjectUncheckedCreateInput>
    /**
     * In case the ContentProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentProjectUpdateInput, ContentProjectUncheckedUpdateInput>
  }

  /**
   * ContentProject delete
   */
  export type ContentProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
    /**
     * Filter which ContentProject to delete.
     */
    where: ContentProjectWhereUniqueInput
  }

  /**
   * ContentProject deleteMany
   */
  export type ContentProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentProjects to delete
     */
    where?: ContentProjectWhereInput
    /**
     * Limit how many ContentProjects to delete.
     */
    limit?: number
  }

  /**
   * ContentProject.trendAnalyses
   */
  export type ContentProject$trendAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    where?: TrendAnalysisWhereInput
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    cursor?: TrendAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendAnalysisScalarFieldEnum | TrendAnalysisScalarFieldEnum[]
  }

  /**
   * ContentProject.scripts
   */
  export type ContentProject$scriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    cursor?: ScriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * ContentProject.mediaSuggestions
   */
  export type ContentProject$mediaSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    where?: MediaSuggestionWhereInput
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    cursor?: MediaSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaSuggestionScalarFieldEnum | MediaSuggestionScalarFieldEnum[]
  }

  /**
   * ContentProject.publicationMetadata
   */
  export type ContentProject$publicationMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    where?: PublicationMetadataWhereInput
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    cursor?: PublicationMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationMetadataScalarFieldEnum | PublicationMetadataScalarFieldEnum[]
  }

  /**
   * ContentProject.exportJobs
   */
  export type ContentProject$exportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    cursor?: ExportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ContentProject without action
   */
  export type ContentProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentProject
     */
    select?: ContentProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentProject
     */
    omit?: ContentProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentProjectInclude<ExtArgs> | null
  }


  /**
   * Model TrendAnalysis
   */

  export type AggregateTrendAnalysis = {
    _count: TrendAnalysisCountAggregateOutputType | null
    _min: TrendAnalysisMinAggregateOutputType | null
    _max: TrendAnalysisMaxAggregateOutputType | null
  }

  export type TrendAnalysisMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    keyword: string | null
    analyzedAt: Date | null
    createdAt: Date | null
  }

  export type TrendAnalysisMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    keyword: string | null
    analyzedAt: Date | null
    createdAt: Date | null
  }

  export type TrendAnalysisCountAggregateOutputType = {
    id: number
    organizationId: number
    projectId: number
    keyword: number
    data: number
    analyzedAt: number
    createdAt: number
    _all: number
  }


  export type TrendAnalysisMinAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    keyword?: true
    analyzedAt?: true
    createdAt?: true
  }

  export type TrendAnalysisMaxAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    keyword?: true
    analyzedAt?: true
    createdAt?: true
  }

  export type TrendAnalysisCountAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    keyword?: true
    data?: true
    analyzedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TrendAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendAnalysis to aggregate.
     */
    where?: TrendAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendAnalyses to fetch.
     */
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendAnalyses
    **/
    _count?: true | TrendAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendAnalysisMaxAggregateInputType
  }

  export type GetTrendAnalysisAggregateType<T extends TrendAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendAnalysis[P]>
      : GetScalarType<T[P], AggregateTrendAnalysis[P]>
  }




  export type TrendAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendAnalysisWhereInput
    orderBy?: TrendAnalysisOrderByWithAggregationInput | TrendAnalysisOrderByWithAggregationInput[]
    by: TrendAnalysisScalarFieldEnum[] | TrendAnalysisScalarFieldEnum
    having?: TrendAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendAnalysisCountAggregateInputType | true
    _min?: TrendAnalysisMinAggregateInputType
    _max?: TrendAnalysisMaxAggregateInputType
  }

  export type TrendAnalysisGroupByOutputType = {
    id: string
    organizationId: string
    projectId: string
    keyword: string
    data: JsonValue
    analyzedAt: Date
    createdAt: Date
    _count: TrendAnalysisCountAggregateOutputType | null
    _min: TrendAnalysisMinAggregateOutputType | null
    _max: TrendAnalysisMaxAggregateOutputType | null
  }

  type GetTrendAnalysisGroupByPayload<T extends TrendAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], TrendAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type TrendAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    keyword?: boolean
    data?: boolean
    analyzedAt?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendAnalysis"]>

  export type TrendAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    keyword?: boolean
    data?: boolean
    analyzedAt?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendAnalysis"]>

  export type TrendAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    keyword?: boolean
    data?: boolean
    analyzedAt?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendAnalysis"]>

  export type TrendAnalysisSelectScalar = {
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    keyword?: boolean
    data?: boolean
    analyzedAt?: boolean
    createdAt?: boolean
  }

  export type TrendAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "projectId" | "keyword" | "data" | "analyzedAt" | "createdAt", ExtArgs["result"]["trendAnalysis"]>
  export type TrendAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type TrendAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type TrendAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }

  export type $TrendAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendAnalysis"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contentProject: Prisma.$ContentProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      projectId: string
      keyword: string
      data: Prisma.JsonValue
      analyzedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["trendAnalysis"]>
    composites: {}
  }

  type TrendAnalysisGetPayload<S extends boolean | null | undefined | TrendAnalysisDefaultArgs> = $Result.GetResult<Prisma.$TrendAnalysisPayload, S>

  type TrendAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrendAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrendAnalysisCountAggregateInputType | true
    }

  export interface TrendAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendAnalysis'], meta: { name: 'TrendAnalysis' } }
    /**
     * Find zero or one TrendAnalysis that matches the filter.
     * @param {TrendAnalysisFindUniqueArgs} args - Arguments to find a TrendAnalysis
     * @example
     * // Get one TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendAnalysisFindUniqueArgs>(args: SelectSubset<T, TrendAnalysisFindUniqueArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrendAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrendAnalysisFindUniqueOrThrowArgs} args - Arguments to find a TrendAnalysis
     * @example
     * // Get one TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisFindFirstArgs} args - Arguments to find a TrendAnalysis
     * @example
     * // Get one TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendAnalysisFindFirstArgs>(args?: SelectSubset<T, TrendAnalysisFindFirstArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisFindFirstOrThrowArgs} args - Arguments to find a TrendAnalysis
     * @example
     * // Get one TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrendAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendAnalyses
     * const trendAnalyses = await prisma.trendAnalysis.findMany()
     * 
     * // Get first 10 TrendAnalyses
     * const trendAnalyses = await prisma.trendAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendAnalysisWithIdOnly = await prisma.trendAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendAnalysisFindManyArgs>(args?: SelectSubset<T, TrendAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrendAnalysis.
     * @param {TrendAnalysisCreateArgs} args - Arguments to create a TrendAnalysis.
     * @example
     * // Create one TrendAnalysis
     * const TrendAnalysis = await prisma.trendAnalysis.create({
     *   data: {
     *     // ... data to create a TrendAnalysis
     *   }
     * })
     * 
     */
    create<T extends TrendAnalysisCreateArgs>(args: SelectSubset<T, TrendAnalysisCreateArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrendAnalyses.
     * @param {TrendAnalysisCreateManyArgs} args - Arguments to create many TrendAnalyses.
     * @example
     * // Create many TrendAnalyses
     * const trendAnalysis = await prisma.trendAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendAnalysisCreateManyArgs>(args?: SelectSubset<T, TrendAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrendAnalyses and returns the data saved in the database.
     * @param {TrendAnalysisCreateManyAndReturnArgs} args - Arguments to create many TrendAnalyses.
     * @example
     * // Create many TrendAnalyses
     * const trendAnalysis = await prisma.trendAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrendAnalyses and only return the `id`
     * const trendAnalysisWithIdOnly = await prisma.trendAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrendAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, TrendAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrendAnalysis.
     * @param {TrendAnalysisDeleteArgs} args - Arguments to delete one TrendAnalysis.
     * @example
     * // Delete one TrendAnalysis
     * const TrendAnalysis = await prisma.trendAnalysis.delete({
     *   where: {
     *     // ... filter to delete one TrendAnalysis
     *   }
     * })
     * 
     */
    delete<T extends TrendAnalysisDeleteArgs>(args: SelectSubset<T, TrendAnalysisDeleteArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrendAnalysis.
     * @param {TrendAnalysisUpdateArgs} args - Arguments to update one TrendAnalysis.
     * @example
     * // Update one TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendAnalysisUpdateArgs>(args: SelectSubset<T, TrendAnalysisUpdateArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrendAnalyses.
     * @param {TrendAnalysisDeleteManyArgs} args - Arguments to filter TrendAnalyses to delete.
     * @example
     * // Delete a few TrendAnalyses
     * const { count } = await prisma.trendAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendAnalysisDeleteManyArgs>(args?: SelectSubset<T, TrendAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendAnalyses
     * const trendAnalysis = await prisma.trendAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendAnalysisUpdateManyArgs>(args: SelectSubset<T, TrendAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendAnalyses and returns the data updated in the database.
     * @param {TrendAnalysisUpdateManyAndReturnArgs} args - Arguments to update many TrendAnalyses.
     * @example
     * // Update many TrendAnalyses
     * const trendAnalysis = await prisma.trendAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrendAnalyses and only return the `id`
     * const trendAnalysisWithIdOnly = await prisma.trendAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrendAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, TrendAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrendAnalysis.
     * @param {TrendAnalysisUpsertArgs} args - Arguments to update or create a TrendAnalysis.
     * @example
     * // Update or create a TrendAnalysis
     * const trendAnalysis = await prisma.trendAnalysis.upsert({
     *   create: {
     *     // ... data to create a TrendAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends TrendAnalysisUpsertArgs>(args: SelectSubset<T, TrendAnalysisUpsertArgs<ExtArgs>>): Prisma__TrendAnalysisClient<$Result.GetResult<Prisma.$TrendAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrendAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisCountArgs} args - Arguments to filter TrendAnalyses to count.
     * @example
     * // Count the number of TrendAnalyses
     * const count = await prisma.trendAnalysis.count({
     *   where: {
     *     // ... the filter for the TrendAnalyses we want to count
     *   }
     * })
    **/
    count<T extends TrendAnalysisCountArgs>(
      args?: Subset<T, TrendAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrendAnalysisAggregateArgs>(args: Subset<T, TrendAnalysisAggregateArgs>): Prisma.PrismaPromise<GetTrendAnalysisAggregateType<T>>

    /**
     * Group by TrendAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAnalysisGroupByArgs} args - Group by arguments.
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
      T extends TrendAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: TrendAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TrendAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendAnalysis model
   */
  readonly fields: TrendAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProject<T extends ContentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentProjectDefaultArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrendAnalysis model
   */
  interface TrendAnalysisFieldRefs {
    readonly id: FieldRef<"TrendAnalysis", 'String'>
    readonly organizationId: FieldRef<"TrendAnalysis", 'String'>
    readonly projectId: FieldRef<"TrendAnalysis", 'String'>
    readonly keyword: FieldRef<"TrendAnalysis", 'String'>
    readonly data: FieldRef<"TrendAnalysis", 'Json'>
    readonly analyzedAt: FieldRef<"TrendAnalysis", 'DateTime'>
    readonly createdAt: FieldRef<"TrendAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrendAnalysis findUnique
   */
  export type TrendAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which TrendAnalysis to fetch.
     */
    where: TrendAnalysisWhereUniqueInput
  }

  /**
   * TrendAnalysis findUniqueOrThrow
   */
  export type TrendAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which TrendAnalysis to fetch.
     */
    where: TrendAnalysisWhereUniqueInput
  }

  /**
   * TrendAnalysis findFirst
   */
  export type TrendAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which TrendAnalysis to fetch.
     */
    where?: TrendAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendAnalyses to fetch.
     */
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendAnalyses.
     */
    cursor?: TrendAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendAnalyses.
     */
    distinct?: TrendAnalysisScalarFieldEnum | TrendAnalysisScalarFieldEnum[]
  }

  /**
   * TrendAnalysis findFirstOrThrow
   */
  export type TrendAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which TrendAnalysis to fetch.
     */
    where?: TrendAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendAnalyses to fetch.
     */
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendAnalyses.
     */
    cursor?: TrendAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendAnalyses.
     */
    distinct?: TrendAnalysisScalarFieldEnum | TrendAnalysisScalarFieldEnum[]
  }

  /**
   * TrendAnalysis findMany
   */
  export type TrendAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which TrendAnalyses to fetch.
     */
    where?: TrendAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendAnalyses to fetch.
     */
    orderBy?: TrendAnalysisOrderByWithRelationInput | TrendAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendAnalyses.
     */
    cursor?: TrendAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendAnalyses.
     */
    distinct?: TrendAnalysisScalarFieldEnum | TrendAnalysisScalarFieldEnum[]
  }

  /**
   * TrendAnalysis create
   */
  export type TrendAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendAnalysis.
     */
    data: XOR<TrendAnalysisCreateInput, TrendAnalysisUncheckedCreateInput>
  }

  /**
   * TrendAnalysis createMany
   */
  export type TrendAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendAnalyses.
     */
    data: TrendAnalysisCreateManyInput | TrendAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrendAnalysis createManyAndReturn
   */
  export type TrendAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many TrendAnalyses.
     */
    data: TrendAnalysisCreateManyInput | TrendAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrendAnalysis update
   */
  export type TrendAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendAnalysis.
     */
    data: XOR<TrendAnalysisUpdateInput, TrendAnalysisUncheckedUpdateInput>
    /**
     * Choose, which TrendAnalysis to update.
     */
    where: TrendAnalysisWhereUniqueInput
  }

  /**
   * TrendAnalysis updateMany
   */
  export type TrendAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendAnalyses.
     */
    data: XOR<TrendAnalysisUpdateManyMutationInput, TrendAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which TrendAnalyses to update
     */
    where?: TrendAnalysisWhereInput
    /**
     * Limit how many TrendAnalyses to update.
     */
    limit?: number
  }

  /**
   * TrendAnalysis updateManyAndReturn
   */
  export type TrendAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update TrendAnalyses.
     */
    data: XOR<TrendAnalysisUpdateManyMutationInput, TrendAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which TrendAnalyses to update
     */
    where?: TrendAnalysisWhereInput
    /**
     * Limit how many TrendAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrendAnalysis upsert
   */
  export type TrendAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendAnalysis to update in case it exists.
     */
    where: TrendAnalysisWhereUniqueInput
    /**
     * In case the TrendAnalysis found by the `where` argument doesn't exist, create a new TrendAnalysis with this data.
     */
    create: XOR<TrendAnalysisCreateInput, TrendAnalysisUncheckedCreateInput>
    /**
     * In case the TrendAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendAnalysisUpdateInput, TrendAnalysisUncheckedUpdateInput>
  }

  /**
   * TrendAnalysis delete
   */
  export type TrendAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
    /**
     * Filter which TrendAnalysis to delete.
     */
    where: TrendAnalysisWhereUniqueInput
  }

  /**
   * TrendAnalysis deleteMany
   */
  export type TrendAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendAnalyses to delete
     */
    where?: TrendAnalysisWhereInput
    /**
     * Limit how many TrendAnalyses to delete.
     */
    limit?: number
  }

  /**
   * TrendAnalysis without action
   */
  export type TrendAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendAnalysis
     */
    select?: TrendAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendAnalysis
     */
    omit?: TrendAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Script
   */

  export type AggregateScript = {
    _count: ScriptCountAggregateOutputType | null
    _avg: ScriptAvgAggregateOutputType | null
    _sum: ScriptSumAggregateOutputType | null
    _min: ScriptMinAggregateOutputType | null
    _max: ScriptMaxAggregateOutputType | null
  }

  export type ScriptAvgAggregateOutputType = {
    wordCount: number | null
    estimatedDurationSecs: number | null
    version: number | null
  }

  export type ScriptSumAggregateOutputType = {
    wordCount: number | null
    estimatedDurationSecs: number | null
    version: number | null
  }

  export type ScriptMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    wordCount: number | null
    estimatedDurationSecs: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScriptMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    wordCount: number | null
    estimatedDurationSecs: number | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScriptCountAggregateOutputType = {
    id: number
    organizationId: number
    projectId: number
    blocks: number
    wordCount: number
    estimatedDurationSecs: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScriptAvgAggregateInputType = {
    wordCount?: true
    estimatedDurationSecs?: true
    version?: true
  }

  export type ScriptSumAggregateInputType = {
    wordCount?: true
    estimatedDurationSecs?: true
    version?: true
  }

  export type ScriptMinAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    wordCount?: true
    estimatedDurationSecs?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScriptMaxAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    wordCount?: true
    estimatedDurationSecs?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScriptCountAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    blocks?: true
    wordCount?: true
    estimatedDurationSecs?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Script to aggregate.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scripts
    **/
    _count?: true | ScriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScriptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScriptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScriptMaxAggregateInputType
  }

  export type GetScriptAggregateType<T extends ScriptAggregateArgs> = {
        [P in keyof T & keyof AggregateScript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScript[P]>
      : GetScalarType<T[P], AggregateScript[P]>
  }




  export type ScriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptWhereInput
    orderBy?: ScriptOrderByWithAggregationInput | ScriptOrderByWithAggregationInput[]
    by: ScriptScalarFieldEnum[] | ScriptScalarFieldEnum
    having?: ScriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScriptCountAggregateInputType | true
    _avg?: ScriptAvgAggregateInputType
    _sum?: ScriptSumAggregateInputType
    _min?: ScriptMinAggregateInputType
    _max?: ScriptMaxAggregateInputType
  }

  export type ScriptGroupByOutputType = {
    id: string
    organizationId: string
    projectId: string
    blocks: JsonValue
    wordCount: number | null
    estimatedDurationSecs: number | null
    version: number
    createdAt: Date
    updatedAt: Date
    _count: ScriptCountAggregateOutputType | null
    _avg: ScriptAvgAggregateOutputType | null
    _sum: ScriptSumAggregateOutputType | null
    _min: ScriptMinAggregateOutputType | null
    _max: ScriptMaxAggregateOutputType | null
  }

  type GetScriptGroupByPayload<T extends ScriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScriptGroupByOutputType[P]>
            : GetScalarType<T[P], ScriptGroupByOutputType[P]>
        }
      >
    >


  export type ScriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    blocks?: boolean
    wordCount?: boolean
    estimatedDurationSecs?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
    narrations?: boolean | Script$narrationsArgs<ExtArgs>
    _count?: boolean | ScriptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    blocks?: boolean
    wordCount?: boolean
    estimatedDurationSecs?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    blocks?: boolean
    wordCount?: boolean
    estimatedDurationSecs?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["script"]>

  export type ScriptSelectScalar = {
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    blocks?: boolean
    wordCount?: boolean
    estimatedDurationSecs?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScriptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "projectId" | "blocks" | "wordCount" | "estimatedDurationSecs" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["script"]>
  export type ScriptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
    narrations?: boolean | Script$narrationsArgs<ExtArgs>
    _count?: boolean | ScriptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScriptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type ScriptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }

  export type $ScriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Script"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contentProject: Prisma.$ContentProjectPayload<ExtArgs>
      narrations: Prisma.$NarrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      projectId: string
      blocks: Prisma.JsonValue
      wordCount: number | null
      estimatedDurationSecs: number | null
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["script"]>
    composites: {}
  }

  type ScriptGetPayload<S extends boolean | null | undefined | ScriptDefaultArgs> = $Result.GetResult<Prisma.$ScriptPayload, S>

  type ScriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScriptCountAggregateInputType | true
    }

  export interface ScriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Script'], meta: { name: 'Script' } }
    /**
     * Find zero or one Script that matches the filter.
     * @param {ScriptFindUniqueArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScriptFindUniqueArgs>(args: SelectSubset<T, ScriptFindUniqueArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Script that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScriptFindUniqueOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScriptFindUniqueOrThrowArgs>(args: SelectSubset<T, ScriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Script that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScriptFindFirstArgs>(args?: SelectSubset<T, ScriptFindFirstArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Script that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScriptFindFirstOrThrowArgs>(args?: SelectSubset<T, ScriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scripts
     * const scripts = await prisma.script.findMany()
     * 
     * // Get first 10 Scripts
     * const scripts = await prisma.script.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scriptWithIdOnly = await prisma.script.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScriptFindManyArgs>(args?: SelectSubset<T, ScriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Script.
     * @param {ScriptCreateArgs} args - Arguments to create a Script.
     * @example
     * // Create one Script
     * const Script = await prisma.script.create({
     *   data: {
     *     // ... data to create a Script
     *   }
     * })
     * 
     */
    create<T extends ScriptCreateArgs>(args: SelectSubset<T, ScriptCreateArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scripts.
     * @param {ScriptCreateManyArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScriptCreateManyArgs>(args?: SelectSubset<T, ScriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scripts and returns the data saved in the database.
     * @param {ScriptCreateManyAndReturnArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScriptCreateManyAndReturnArgs>(args?: SelectSubset<T, ScriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Script.
     * @param {ScriptDeleteArgs} args - Arguments to delete one Script.
     * @example
     * // Delete one Script
     * const Script = await prisma.script.delete({
     *   where: {
     *     // ... filter to delete one Script
     *   }
     * })
     * 
     */
    delete<T extends ScriptDeleteArgs>(args: SelectSubset<T, ScriptDeleteArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Script.
     * @param {ScriptUpdateArgs} args - Arguments to update one Script.
     * @example
     * // Update one Script
     * const script = await prisma.script.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScriptUpdateArgs>(args: SelectSubset<T, ScriptUpdateArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scripts.
     * @param {ScriptDeleteManyArgs} args - Arguments to filter Scripts to delete.
     * @example
     * // Delete a few Scripts
     * const { count } = await prisma.script.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScriptDeleteManyArgs>(args?: SelectSubset<T, ScriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScriptUpdateManyArgs>(args: SelectSubset<T, ScriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scripts and returns the data updated in the database.
     * @param {ScriptUpdateManyAndReturnArgs} args - Arguments to update many Scripts.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScriptUpdateManyAndReturnArgs>(args: SelectSubset<T, ScriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Script.
     * @param {ScriptUpsertArgs} args - Arguments to update or create a Script.
     * @example
     * // Update or create a Script
     * const script = await prisma.script.upsert({
     *   create: {
     *     // ... data to create a Script
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Script we want to update
     *   }
     * })
     */
    upsert<T extends ScriptUpsertArgs>(args: SelectSubset<T, ScriptUpsertArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptCountArgs} args - Arguments to filter Scripts to count.
     * @example
     * // Count the number of Scripts
     * const count = await prisma.script.count({
     *   where: {
     *     // ... the filter for the Scripts we want to count
     *   }
     * })
    **/
    count<T extends ScriptCountArgs>(
      args?: Subset<T, ScriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScriptAggregateArgs>(args: Subset<T, ScriptAggregateArgs>): Prisma.PrismaPromise<GetScriptAggregateType<T>>

    /**
     * Group by Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptGroupByArgs} args - Group by arguments.
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
      T extends ScriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScriptGroupByArgs['orderBy'] }
        : { orderBy?: ScriptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Script model
   */
  readonly fields: ScriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Script.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProject<T extends ContentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentProjectDefaultArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    narrations<T extends Script$narrationsArgs<ExtArgs> = {}>(args?: Subset<T, Script$narrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Script model
   */
  interface ScriptFieldRefs {
    readonly id: FieldRef<"Script", 'String'>
    readonly organizationId: FieldRef<"Script", 'String'>
    readonly projectId: FieldRef<"Script", 'String'>
    readonly blocks: FieldRef<"Script", 'Json'>
    readonly wordCount: FieldRef<"Script", 'Int'>
    readonly estimatedDurationSecs: FieldRef<"Script", 'Int'>
    readonly version: FieldRef<"Script", 'Int'>
    readonly createdAt: FieldRef<"Script", 'DateTime'>
    readonly updatedAt: FieldRef<"Script", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Script findUnique
   */
  export type ScriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script findUniqueOrThrow
   */
  export type ScriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script findFirst
   */
  export type ScriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scripts.
     */
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script findFirstOrThrow
   */
  export type ScriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Script to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scripts.
     */
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script findMany
   */
  export type ScriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter, which Scripts to fetch.
     */
    where?: ScriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scripts to fetch.
     */
    orderBy?: ScriptOrderByWithRelationInput | ScriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scripts.
     */
    cursor?: ScriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scripts.
     */
    distinct?: ScriptScalarFieldEnum | ScriptScalarFieldEnum[]
  }

  /**
   * Script create
   */
  export type ScriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The data needed to create a Script.
     */
    data: XOR<ScriptCreateInput, ScriptUncheckedCreateInput>
  }

  /**
   * Script createMany
   */
  export type ScriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scripts.
     */
    data: ScriptCreateManyInput | ScriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Script createManyAndReturn
   */
  export type ScriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * The data used to create many Scripts.
     */
    data: ScriptCreateManyInput | ScriptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Script update
   */
  export type ScriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The data needed to update a Script.
     */
    data: XOR<ScriptUpdateInput, ScriptUncheckedUpdateInput>
    /**
     * Choose, which Script to update.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script updateMany
   */
  export type ScriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scripts.
     */
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyInput>
    /**
     * Filter which Scripts to update
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to update.
     */
    limit?: number
  }

  /**
   * Script updateManyAndReturn
   */
  export type ScriptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * The data used to update Scripts.
     */
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyInput>
    /**
     * Filter which Scripts to update
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Script upsert
   */
  export type ScriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * The filter to search for the Script to update in case it exists.
     */
    where: ScriptWhereUniqueInput
    /**
     * In case the Script found by the `where` argument doesn't exist, create a new Script with this data.
     */
    create: XOR<ScriptCreateInput, ScriptUncheckedCreateInput>
    /**
     * In case the Script was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScriptUpdateInput, ScriptUncheckedUpdateInput>
  }

  /**
   * Script delete
   */
  export type ScriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
    /**
     * Filter which Script to delete.
     */
    where: ScriptWhereUniqueInput
  }

  /**
   * Script deleteMany
   */
  export type ScriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scripts to delete
     */
    where?: ScriptWhereInput
    /**
     * Limit how many Scripts to delete.
     */
    limit?: number
  }

  /**
   * Script.narrations
   */
  export type Script$narrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    where?: NarrationWhereInput
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    cursor?: NarrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NarrationScalarFieldEnum | NarrationScalarFieldEnum[]
  }

  /**
   * Script without action
   */
  export type ScriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: ScriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Script
     */
    omit?: ScriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptInclude<ExtArgs> | null
  }


  /**
   * Model Narration
   */

  export type AggregateNarration = {
    _count: NarrationCountAggregateOutputType | null
    _avg: NarrationAvgAggregateOutputType | null
    _sum: NarrationSumAggregateOutputType | null
    _min: NarrationMinAggregateOutputType | null
    _max: NarrationMaxAggregateOutputType | null
  }

  export type NarrationAvgAggregateOutputType = {
    durationSecs: number | null
  }

  export type NarrationSumAggregateOutputType = {
    durationSecs: number | null
  }

  export type NarrationMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    scriptId: string | null
    provider: $Enums.TtsProvider | null
    voiceId: string | null
    audioUrl: string | null
    durationSecs: number | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NarrationMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    scriptId: string | null
    provider: $Enums.TtsProvider | null
    voiceId: string | null
    audioUrl: string | null
    durationSecs: number | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NarrationCountAggregateOutputType = {
    id: number
    organizationId: number
    scriptId: number
    provider: number
    voiceId: number
    audioUrl: number
    durationSecs: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NarrationAvgAggregateInputType = {
    durationSecs?: true
  }

  export type NarrationSumAggregateInputType = {
    durationSecs?: true
  }

  export type NarrationMinAggregateInputType = {
    id?: true
    organizationId?: true
    scriptId?: true
    provider?: true
    voiceId?: true
    audioUrl?: true
    durationSecs?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NarrationMaxAggregateInputType = {
    id?: true
    organizationId?: true
    scriptId?: true
    provider?: true
    voiceId?: true
    audioUrl?: true
    durationSecs?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NarrationCountAggregateInputType = {
    id?: true
    organizationId?: true
    scriptId?: true
    provider?: true
    voiceId?: true
    audioUrl?: true
    durationSecs?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NarrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Narration to aggregate.
     */
    where?: NarrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Narrations to fetch.
     */
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NarrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Narrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Narrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Narrations
    **/
    _count?: true | NarrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NarrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NarrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NarrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NarrationMaxAggregateInputType
  }

  export type GetNarrationAggregateType<T extends NarrationAggregateArgs> = {
        [P in keyof T & keyof AggregateNarration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNarration[P]>
      : GetScalarType<T[P], AggregateNarration[P]>
  }




  export type NarrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrationWhereInput
    orderBy?: NarrationOrderByWithAggregationInput | NarrationOrderByWithAggregationInput[]
    by: NarrationScalarFieldEnum[] | NarrationScalarFieldEnum
    having?: NarrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NarrationCountAggregateInputType | true
    _avg?: NarrationAvgAggregateInputType
    _sum?: NarrationSumAggregateInputType
    _min?: NarrationMinAggregateInputType
    _max?: NarrationMaxAggregateInputType
  }

  export type NarrationGroupByOutputType = {
    id: string
    organizationId: string
    scriptId: string
    provider: $Enums.TtsProvider
    voiceId: string | null
    audioUrl: string | null
    durationSecs: number | null
    status: $Enums.JobStatus
    createdAt: Date
    updatedAt: Date
    _count: NarrationCountAggregateOutputType | null
    _avg: NarrationAvgAggregateOutputType | null
    _sum: NarrationSumAggregateOutputType | null
    _min: NarrationMinAggregateOutputType | null
    _max: NarrationMaxAggregateOutputType | null
  }

  type GetNarrationGroupByPayload<T extends NarrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NarrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NarrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NarrationGroupByOutputType[P]>
            : GetScalarType<T[P], NarrationGroupByOutputType[P]>
        }
      >
    >


  export type NarrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    scriptId?: boolean
    provider?: boolean
    voiceId?: boolean
    audioUrl?: boolean
    durationSecs?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narration"]>

  export type NarrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    scriptId?: boolean
    provider?: boolean
    voiceId?: boolean
    audioUrl?: boolean
    durationSecs?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narration"]>

  export type NarrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    scriptId?: boolean
    provider?: boolean
    voiceId?: boolean
    audioUrl?: boolean
    durationSecs?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narration"]>

  export type NarrationSelectScalar = {
    id?: boolean
    organizationId?: boolean
    scriptId?: boolean
    provider?: boolean
    voiceId?: boolean
    audioUrl?: boolean
    durationSecs?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NarrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "scriptId" | "provider" | "voiceId" | "audioUrl" | "durationSecs" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["narration"]>
  export type NarrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }
  export type NarrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }
  export type NarrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    script?: boolean | ScriptDefaultArgs<ExtArgs>
  }

  export type $NarrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Narration"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      script: Prisma.$ScriptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      scriptId: string
      provider: $Enums.TtsProvider
      voiceId: string | null
      audioUrl: string | null
      durationSecs: number | null
      status: $Enums.JobStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["narration"]>
    composites: {}
  }

  type NarrationGetPayload<S extends boolean | null | undefined | NarrationDefaultArgs> = $Result.GetResult<Prisma.$NarrationPayload, S>

  type NarrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NarrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NarrationCountAggregateInputType | true
    }

  export interface NarrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Narration'], meta: { name: 'Narration' } }
    /**
     * Find zero or one Narration that matches the filter.
     * @param {NarrationFindUniqueArgs} args - Arguments to find a Narration
     * @example
     * // Get one Narration
     * const narration = await prisma.narration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NarrationFindUniqueArgs>(args: SelectSubset<T, NarrationFindUniqueArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Narration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NarrationFindUniqueOrThrowArgs} args - Arguments to find a Narration
     * @example
     * // Get one Narration
     * const narration = await prisma.narration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NarrationFindUniqueOrThrowArgs>(args: SelectSubset<T, NarrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Narration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationFindFirstArgs} args - Arguments to find a Narration
     * @example
     * // Get one Narration
     * const narration = await prisma.narration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NarrationFindFirstArgs>(args?: SelectSubset<T, NarrationFindFirstArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Narration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationFindFirstOrThrowArgs} args - Arguments to find a Narration
     * @example
     * // Get one Narration
     * const narration = await prisma.narration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NarrationFindFirstOrThrowArgs>(args?: SelectSubset<T, NarrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Narrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Narrations
     * const narrations = await prisma.narration.findMany()
     * 
     * // Get first 10 Narrations
     * const narrations = await prisma.narration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const narrationWithIdOnly = await prisma.narration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NarrationFindManyArgs>(args?: SelectSubset<T, NarrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Narration.
     * @param {NarrationCreateArgs} args - Arguments to create a Narration.
     * @example
     * // Create one Narration
     * const Narration = await prisma.narration.create({
     *   data: {
     *     // ... data to create a Narration
     *   }
     * })
     * 
     */
    create<T extends NarrationCreateArgs>(args: SelectSubset<T, NarrationCreateArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Narrations.
     * @param {NarrationCreateManyArgs} args - Arguments to create many Narrations.
     * @example
     * // Create many Narrations
     * const narration = await prisma.narration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NarrationCreateManyArgs>(args?: SelectSubset<T, NarrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Narrations and returns the data saved in the database.
     * @param {NarrationCreateManyAndReturnArgs} args - Arguments to create many Narrations.
     * @example
     * // Create many Narrations
     * const narration = await prisma.narration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Narrations and only return the `id`
     * const narrationWithIdOnly = await prisma.narration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NarrationCreateManyAndReturnArgs>(args?: SelectSubset<T, NarrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Narration.
     * @param {NarrationDeleteArgs} args - Arguments to delete one Narration.
     * @example
     * // Delete one Narration
     * const Narration = await prisma.narration.delete({
     *   where: {
     *     // ... filter to delete one Narration
     *   }
     * })
     * 
     */
    delete<T extends NarrationDeleteArgs>(args: SelectSubset<T, NarrationDeleteArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Narration.
     * @param {NarrationUpdateArgs} args - Arguments to update one Narration.
     * @example
     * // Update one Narration
     * const narration = await prisma.narration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NarrationUpdateArgs>(args: SelectSubset<T, NarrationUpdateArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Narrations.
     * @param {NarrationDeleteManyArgs} args - Arguments to filter Narrations to delete.
     * @example
     * // Delete a few Narrations
     * const { count } = await prisma.narration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NarrationDeleteManyArgs>(args?: SelectSubset<T, NarrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Narrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Narrations
     * const narration = await prisma.narration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NarrationUpdateManyArgs>(args: SelectSubset<T, NarrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Narrations and returns the data updated in the database.
     * @param {NarrationUpdateManyAndReturnArgs} args - Arguments to update many Narrations.
     * @example
     * // Update many Narrations
     * const narration = await prisma.narration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Narrations and only return the `id`
     * const narrationWithIdOnly = await prisma.narration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NarrationUpdateManyAndReturnArgs>(args: SelectSubset<T, NarrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Narration.
     * @param {NarrationUpsertArgs} args - Arguments to update or create a Narration.
     * @example
     * // Update or create a Narration
     * const narration = await prisma.narration.upsert({
     *   create: {
     *     // ... data to create a Narration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Narration we want to update
     *   }
     * })
     */
    upsert<T extends NarrationUpsertArgs>(args: SelectSubset<T, NarrationUpsertArgs<ExtArgs>>): Prisma__NarrationClient<$Result.GetResult<Prisma.$NarrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Narrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationCountArgs} args - Arguments to filter Narrations to count.
     * @example
     * // Count the number of Narrations
     * const count = await prisma.narration.count({
     *   where: {
     *     // ... the filter for the Narrations we want to count
     *   }
     * })
    **/
    count<T extends NarrationCountArgs>(
      args?: Subset<T, NarrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NarrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Narration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NarrationAggregateArgs>(args: Subset<T, NarrationAggregateArgs>): Prisma.PrismaPromise<GetNarrationAggregateType<T>>

    /**
     * Group by Narration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrationGroupByArgs} args - Group by arguments.
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
      T extends NarrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NarrationGroupByArgs['orderBy'] }
        : { orderBy?: NarrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NarrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNarrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Narration model
   */
  readonly fields: NarrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Narration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NarrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    script<T extends ScriptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScriptDefaultArgs<ExtArgs>>): Prisma__ScriptClient<$Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Narration model
   */
  interface NarrationFieldRefs {
    readonly id: FieldRef<"Narration", 'String'>
    readonly organizationId: FieldRef<"Narration", 'String'>
    readonly scriptId: FieldRef<"Narration", 'String'>
    readonly provider: FieldRef<"Narration", 'TtsProvider'>
    readonly voiceId: FieldRef<"Narration", 'String'>
    readonly audioUrl: FieldRef<"Narration", 'String'>
    readonly durationSecs: FieldRef<"Narration", 'Float'>
    readonly status: FieldRef<"Narration", 'JobStatus'>
    readonly createdAt: FieldRef<"Narration", 'DateTime'>
    readonly updatedAt: FieldRef<"Narration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Narration findUnique
   */
  export type NarrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter, which Narration to fetch.
     */
    where: NarrationWhereUniqueInput
  }

  /**
   * Narration findUniqueOrThrow
   */
  export type NarrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter, which Narration to fetch.
     */
    where: NarrationWhereUniqueInput
  }

  /**
   * Narration findFirst
   */
  export type NarrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter, which Narration to fetch.
     */
    where?: NarrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Narrations to fetch.
     */
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Narrations.
     */
    cursor?: NarrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Narrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Narrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Narrations.
     */
    distinct?: NarrationScalarFieldEnum | NarrationScalarFieldEnum[]
  }

  /**
   * Narration findFirstOrThrow
   */
  export type NarrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter, which Narration to fetch.
     */
    where?: NarrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Narrations to fetch.
     */
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Narrations.
     */
    cursor?: NarrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Narrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Narrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Narrations.
     */
    distinct?: NarrationScalarFieldEnum | NarrationScalarFieldEnum[]
  }

  /**
   * Narration findMany
   */
  export type NarrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter, which Narrations to fetch.
     */
    where?: NarrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Narrations to fetch.
     */
    orderBy?: NarrationOrderByWithRelationInput | NarrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Narrations.
     */
    cursor?: NarrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Narrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Narrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Narrations.
     */
    distinct?: NarrationScalarFieldEnum | NarrationScalarFieldEnum[]
  }

  /**
   * Narration create
   */
  export type NarrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Narration.
     */
    data: XOR<NarrationCreateInput, NarrationUncheckedCreateInput>
  }

  /**
   * Narration createMany
   */
  export type NarrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Narrations.
     */
    data: NarrationCreateManyInput | NarrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Narration createManyAndReturn
   */
  export type NarrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * The data used to create many Narrations.
     */
    data: NarrationCreateManyInput | NarrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Narration update
   */
  export type NarrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Narration.
     */
    data: XOR<NarrationUpdateInput, NarrationUncheckedUpdateInput>
    /**
     * Choose, which Narration to update.
     */
    where: NarrationWhereUniqueInput
  }

  /**
   * Narration updateMany
   */
  export type NarrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Narrations.
     */
    data: XOR<NarrationUpdateManyMutationInput, NarrationUncheckedUpdateManyInput>
    /**
     * Filter which Narrations to update
     */
    where?: NarrationWhereInput
    /**
     * Limit how many Narrations to update.
     */
    limit?: number
  }

  /**
   * Narration updateManyAndReturn
   */
  export type NarrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * The data used to update Narrations.
     */
    data: XOR<NarrationUpdateManyMutationInput, NarrationUncheckedUpdateManyInput>
    /**
     * Filter which Narrations to update
     */
    where?: NarrationWhereInput
    /**
     * Limit how many Narrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Narration upsert
   */
  export type NarrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Narration to update in case it exists.
     */
    where: NarrationWhereUniqueInput
    /**
     * In case the Narration found by the `where` argument doesn't exist, create a new Narration with this data.
     */
    create: XOR<NarrationCreateInput, NarrationUncheckedCreateInput>
    /**
     * In case the Narration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NarrationUpdateInput, NarrationUncheckedUpdateInput>
  }

  /**
   * Narration delete
   */
  export type NarrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
    /**
     * Filter which Narration to delete.
     */
    where: NarrationWhereUniqueInput
  }

  /**
   * Narration deleteMany
   */
  export type NarrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Narrations to delete
     */
    where?: NarrationWhereInput
    /**
     * Limit how many Narrations to delete.
     */
    limit?: number
  }

  /**
   * Narration without action
   */
  export type NarrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Narration
     */
    select?: NarrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Narration
     */
    omit?: NarrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrationInclude<ExtArgs> | null
  }


  /**
   * Model MediaSuggestion
   */

  export type AggregateMediaSuggestion = {
    _count: MediaSuggestionCountAggregateOutputType | null
    _min: MediaSuggestionMinAggregateOutputType | null
    _max: MediaSuggestionMaxAggregateOutputType | null
  }

  export type MediaSuggestionMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    type: $Enums.AssetType | null
    prompt: string | null
    url: string | null
    createdAt: Date | null
  }

  export type MediaSuggestionMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    type: $Enums.AssetType | null
    prompt: string | null
    url: string | null
    createdAt: Date | null
  }

  export type MediaSuggestionCountAggregateOutputType = {
    id: number
    organizationId: number
    projectId: number
    type: number
    prompt: number
    url: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type MediaSuggestionMinAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    type?: true
    prompt?: true
    url?: true
    createdAt?: true
  }

  export type MediaSuggestionMaxAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    type?: true
    prompt?: true
    url?: true
    createdAt?: true
  }

  export type MediaSuggestionCountAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    type?: true
    prompt?: true
    url?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type MediaSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaSuggestion to aggregate.
     */
    where?: MediaSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaSuggestions to fetch.
     */
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaSuggestions
    **/
    _count?: true | MediaSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaSuggestionMaxAggregateInputType
  }

  export type GetMediaSuggestionAggregateType<T extends MediaSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaSuggestion[P]>
      : GetScalarType<T[P], AggregateMediaSuggestion[P]>
  }




  export type MediaSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaSuggestionWhereInput
    orderBy?: MediaSuggestionOrderByWithAggregationInput | MediaSuggestionOrderByWithAggregationInput[]
    by: MediaSuggestionScalarFieldEnum[] | MediaSuggestionScalarFieldEnum
    having?: MediaSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaSuggestionCountAggregateInputType | true
    _min?: MediaSuggestionMinAggregateInputType
    _max?: MediaSuggestionMaxAggregateInputType
  }

  export type MediaSuggestionGroupByOutputType = {
    id: string
    organizationId: string
    projectId: string
    type: $Enums.AssetType
    prompt: string | null
    url: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: MediaSuggestionCountAggregateOutputType | null
    _min: MediaSuggestionMinAggregateOutputType | null
    _max: MediaSuggestionMaxAggregateOutputType | null
  }

  type GetMediaSuggestionGroupByPayload<T extends MediaSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], MediaSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type MediaSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    type?: boolean
    prompt?: boolean
    url?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaSuggestion"]>

  export type MediaSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    type?: boolean
    prompt?: boolean
    url?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaSuggestion"]>

  export type MediaSuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    type?: boolean
    prompt?: boolean
    url?: boolean
    metadata?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaSuggestion"]>

  export type MediaSuggestionSelectScalar = {
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    type?: boolean
    prompt?: boolean
    url?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type MediaSuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "projectId" | "type" | "prompt" | "url" | "metadata" | "createdAt", ExtArgs["result"]["mediaSuggestion"]>
  export type MediaSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type MediaSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type MediaSuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }

  export type $MediaSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaSuggestion"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contentProject: Prisma.$ContentProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      projectId: string
      type: $Enums.AssetType
      prompt: string | null
      url: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["mediaSuggestion"]>
    composites: {}
  }

  type MediaSuggestionGetPayload<S extends boolean | null | undefined | MediaSuggestionDefaultArgs> = $Result.GetResult<Prisma.$MediaSuggestionPayload, S>

  type MediaSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaSuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaSuggestionCountAggregateInputType | true
    }

  export interface MediaSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaSuggestion'], meta: { name: 'MediaSuggestion' } }
    /**
     * Find zero or one MediaSuggestion that matches the filter.
     * @param {MediaSuggestionFindUniqueArgs} args - Arguments to find a MediaSuggestion
     * @example
     * // Get one MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaSuggestionFindUniqueArgs>(args: SelectSubset<T, MediaSuggestionFindUniqueArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaSuggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaSuggestionFindUniqueOrThrowArgs} args - Arguments to find a MediaSuggestion
     * @example
     * // Get one MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaSuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaSuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionFindFirstArgs} args - Arguments to find a MediaSuggestion
     * @example
     * // Get one MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaSuggestionFindFirstArgs>(args?: SelectSubset<T, MediaSuggestionFindFirstArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionFindFirstOrThrowArgs} args - Arguments to find a MediaSuggestion
     * @example
     * // Get one MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaSuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaSuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaSuggestions
     * const mediaSuggestions = await prisma.mediaSuggestion.findMany()
     * 
     * // Get first 10 MediaSuggestions
     * const mediaSuggestions = await prisma.mediaSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaSuggestionWithIdOnly = await prisma.mediaSuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaSuggestionFindManyArgs>(args?: SelectSubset<T, MediaSuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaSuggestion.
     * @param {MediaSuggestionCreateArgs} args - Arguments to create a MediaSuggestion.
     * @example
     * // Create one MediaSuggestion
     * const MediaSuggestion = await prisma.mediaSuggestion.create({
     *   data: {
     *     // ... data to create a MediaSuggestion
     *   }
     * })
     * 
     */
    create<T extends MediaSuggestionCreateArgs>(args: SelectSubset<T, MediaSuggestionCreateArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaSuggestions.
     * @param {MediaSuggestionCreateManyArgs} args - Arguments to create many MediaSuggestions.
     * @example
     * // Create many MediaSuggestions
     * const mediaSuggestion = await prisma.mediaSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaSuggestionCreateManyArgs>(args?: SelectSubset<T, MediaSuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaSuggestions and returns the data saved in the database.
     * @param {MediaSuggestionCreateManyAndReturnArgs} args - Arguments to create many MediaSuggestions.
     * @example
     * // Create many MediaSuggestions
     * const mediaSuggestion = await prisma.mediaSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaSuggestions and only return the `id`
     * const mediaSuggestionWithIdOnly = await prisma.mediaSuggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaSuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaSuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaSuggestion.
     * @param {MediaSuggestionDeleteArgs} args - Arguments to delete one MediaSuggestion.
     * @example
     * // Delete one MediaSuggestion
     * const MediaSuggestion = await prisma.mediaSuggestion.delete({
     *   where: {
     *     // ... filter to delete one MediaSuggestion
     *   }
     * })
     * 
     */
    delete<T extends MediaSuggestionDeleteArgs>(args: SelectSubset<T, MediaSuggestionDeleteArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaSuggestion.
     * @param {MediaSuggestionUpdateArgs} args - Arguments to update one MediaSuggestion.
     * @example
     * // Update one MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaSuggestionUpdateArgs>(args: SelectSubset<T, MediaSuggestionUpdateArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaSuggestions.
     * @param {MediaSuggestionDeleteManyArgs} args - Arguments to filter MediaSuggestions to delete.
     * @example
     * // Delete a few MediaSuggestions
     * const { count } = await prisma.mediaSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaSuggestionDeleteManyArgs>(args?: SelectSubset<T, MediaSuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaSuggestions
     * const mediaSuggestion = await prisma.mediaSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaSuggestionUpdateManyArgs>(args: SelectSubset<T, MediaSuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaSuggestions and returns the data updated in the database.
     * @param {MediaSuggestionUpdateManyAndReturnArgs} args - Arguments to update many MediaSuggestions.
     * @example
     * // Update many MediaSuggestions
     * const mediaSuggestion = await prisma.mediaSuggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaSuggestions and only return the `id`
     * const mediaSuggestionWithIdOnly = await prisma.mediaSuggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaSuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaSuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaSuggestion.
     * @param {MediaSuggestionUpsertArgs} args - Arguments to update or create a MediaSuggestion.
     * @example
     * // Update or create a MediaSuggestion
     * const mediaSuggestion = await prisma.mediaSuggestion.upsert({
     *   create: {
     *     // ... data to create a MediaSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaSuggestion we want to update
     *   }
     * })
     */
    upsert<T extends MediaSuggestionUpsertArgs>(args: SelectSubset<T, MediaSuggestionUpsertArgs<ExtArgs>>): Prisma__MediaSuggestionClient<$Result.GetResult<Prisma.$MediaSuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionCountArgs} args - Arguments to filter MediaSuggestions to count.
     * @example
     * // Count the number of MediaSuggestions
     * const count = await prisma.mediaSuggestion.count({
     *   where: {
     *     // ... the filter for the MediaSuggestions we want to count
     *   }
     * })
    **/
    count<T extends MediaSuggestionCountArgs>(
      args?: Subset<T, MediaSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaSuggestionAggregateArgs>(args: Subset<T, MediaSuggestionAggregateArgs>): Prisma.PrismaPromise<GetMediaSuggestionAggregateType<T>>

    /**
     * Group by MediaSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaSuggestionGroupByArgs} args - Group by arguments.
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
      T extends MediaSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: MediaSuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MediaSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaSuggestion model
   */
  readonly fields: MediaSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProject<T extends ContentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentProjectDefaultArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaSuggestion model
   */
  interface MediaSuggestionFieldRefs {
    readonly id: FieldRef<"MediaSuggestion", 'String'>
    readonly organizationId: FieldRef<"MediaSuggestion", 'String'>
    readonly projectId: FieldRef<"MediaSuggestion", 'String'>
    readonly type: FieldRef<"MediaSuggestion", 'AssetType'>
    readonly prompt: FieldRef<"MediaSuggestion", 'String'>
    readonly url: FieldRef<"MediaSuggestion", 'String'>
    readonly metadata: FieldRef<"MediaSuggestion", 'Json'>
    readonly createdAt: FieldRef<"MediaSuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaSuggestion findUnique
   */
  export type MediaSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MediaSuggestion to fetch.
     */
    where: MediaSuggestionWhereUniqueInput
  }

  /**
   * MediaSuggestion findUniqueOrThrow
   */
  export type MediaSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MediaSuggestion to fetch.
     */
    where: MediaSuggestionWhereUniqueInput
  }

  /**
   * MediaSuggestion findFirst
   */
  export type MediaSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MediaSuggestion to fetch.
     */
    where?: MediaSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaSuggestions to fetch.
     */
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaSuggestions.
     */
    cursor?: MediaSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaSuggestions.
     */
    distinct?: MediaSuggestionScalarFieldEnum | MediaSuggestionScalarFieldEnum[]
  }

  /**
   * MediaSuggestion findFirstOrThrow
   */
  export type MediaSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MediaSuggestion to fetch.
     */
    where?: MediaSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaSuggestions to fetch.
     */
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaSuggestions.
     */
    cursor?: MediaSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaSuggestions.
     */
    distinct?: MediaSuggestionScalarFieldEnum | MediaSuggestionScalarFieldEnum[]
  }

  /**
   * MediaSuggestion findMany
   */
  export type MediaSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MediaSuggestions to fetch.
     */
    where?: MediaSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaSuggestions to fetch.
     */
    orderBy?: MediaSuggestionOrderByWithRelationInput | MediaSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaSuggestions.
     */
    cursor?: MediaSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaSuggestions.
     */
    distinct?: MediaSuggestionScalarFieldEnum | MediaSuggestionScalarFieldEnum[]
  }

  /**
   * MediaSuggestion create
   */
  export type MediaSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaSuggestion.
     */
    data: XOR<MediaSuggestionCreateInput, MediaSuggestionUncheckedCreateInput>
  }

  /**
   * MediaSuggestion createMany
   */
  export type MediaSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaSuggestions.
     */
    data: MediaSuggestionCreateManyInput | MediaSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaSuggestion createManyAndReturn
   */
  export type MediaSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many MediaSuggestions.
     */
    data: MediaSuggestionCreateManyInput | MediaSuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaSuggestion update
   */
  export type MediaSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaSuggestion.
     */
    data: XOR<MediaSuggestionUpdateInput, MediaSuggestionUncheckedUpdateInput>
    /**
     * Choose, which MediaSuggestion to update.
     */
    where: MediaSuggestionWhereUniqueInput
  }

  /**
   * MediaSuggestion updateMany
   */
  export type MediaSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaSuggestions.
     */
    data: XOR<MediaSuggestionUpdateManyMutationInput, MediaSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which MediaSuggestions to update
     */
    where?: MediaSuggestionWhereInput
    /**
     * Limit how many MediaSuggestions to update.
     */
    limit?: number
  }

  /**
   * MediaSuggestion updateManyAndReturn
   */
  export type MediaSuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * The data used to update MediaSuggestions.
     */
    data: XOR<MediaSuggestionUpdateManyMutationInput, MediaSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which MediaSuggestions to update
     */
    where?: MediaSuggestionWhereInput
    /**
     * Limit how many MediaSuggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaSuggestion upsert
   */
  export type MediaSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaSuggestion to update in case it exists.
     */
    where: MediaSuggestionWhereUniqueInput
    /**
     * In case the MediaSuggestion found by the `where` argument doesn't exist, create a new MediaSuggestion with this data.
     */
    create: XOR<MediaSuggestionCreateInput, MediaSuggestionUncheckedCreateInput>
    /**
     * In case the MediaSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaSuggestionUpdateInput, MediaSuggestionUncheckedUpdateInput>
  }

  /**
   * MediaSuggestion delete
   */
  export type MediaSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
    /**
     * Filter which MediaSuggestion to delete.
     */
    where: MediaSuggestionWhereUniqueInput
  }

  /**
   * MediaSuggestion deleteMany
   */
  export type MediaSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaSuggestions to delete
     */
    where?: MediaSuggestionWhereInput
    /**
     * Limit how many MediaSuggestions to delete.
     */
    limit?: number
  }

  /**
   * MediaSuggestion without action
   */
  export type MediaSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaSuggestion
     */
    select?: MediaSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaSuggestion
     */
    omit?: MediaSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaSuggestionInclude<ExtArgs> | null
  }


  /**
   * Model PublicationMetadata
   */

  export type AggregatePublicationMetadata = {
    _count: PublicationMetadataCountAggregateOutputType | null
    _min: PublicationMetadataMinAggregateOutputType | null
    _max: PublicationMetadataMaxAggregateOutputType | null
  }

  export type PublicationMetadataMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    platform: $Enums.Platform | null
    scheduledAt: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMetadataMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    platform: $Enums.Platform | null
    scheduledAt: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMetadataCountAggregateOutputType = {
    id: number
    organizationId: number
    projectId: number
    title: number
    description: number
    tags: number
    thumbnailUrl: number
    platform: number
    scheduledAt: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationMetadataMinAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    platform?: true
    scheduledAt?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMetadataMaxAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    platform?: true
    scheduledAt?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMetadataCountAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    title?: true
    description?: true
    tags?: true
    thumbnailUrl?: true
    platform?: true
    scheduledAt?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationMetadata to aggregate.
     */
    where?: PublicationMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationMetadata to fetch.
     */
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationMetadata
    **/
    _count?: true | PublicationMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMetadataMaxAggregateInputType
  }

  export type GetPublicationMetadataAggregateType<T extends PublicationMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationMetadata[P]>
      : GetScalarType<T[P], AggregatePublicationMetadata[P]>
  }




  export type PublicationMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationMetadataWhereInput
    orderBy?: PublicationMetadataOrderByWithAggregationInput | PublicationMetadataOrderByWithAggregationInput[]
    by: PublicationMetadataScalarFieldEnum[] | PublicationMetadataScalarFieldEnum
    having?: PublicationMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationMetadataCountAggregateInputType | true
    _min?: PublicationMetadataMinAggregateInputType
    _max?: PublicationMetadataMaxAggregateInputType
  }

  export type PublicationMetadataGroupByOutputType = {
    id: string
    organizationId: string
    projectId: string
    title: string | null
    description: string | null
    tags: string[]
    thumbnailUrl: string | null
    platform: $Enums.Platform
    scheduledAt: Date | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PublicationMetadataCountAggregateOutputType | null
    _min: PublicationMetadataMinAggregateOutputType | null
    _max: PublicationMetadataMaxAggregateOutputType | null
  }

  type GetPublicationMetadataGroupByPayload<T extends PublicationMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationMetadataGroupByOutputType[P]>
        }
      >
    >


  export type PublicationMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    thumbnailUrl?: boolean
    platform?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationMetadata"]>

  export type PublicationMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    thumbnailUrl?: boolean
    platform?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationMetadata"]>

  export type PublicationMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    thumbnailUrl?: boolean
    platform?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationMetadata"]>

  export type PublicationMetadataSelectScalar = {
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    thumbnailUrl?: boolean
    platform?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicationMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "projectId" | "title" | "description" | "tags" | "thumbnailUrl" | "platform" | "scheduledAt" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["publicationMetadata"]>
  export type PublicationMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type PublicationMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type PublicationMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }

  export type $PublicationMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicationMetadata"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contentProject: Prisma.$ContentProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      projectId: string
      title: string | null
      description: string | null
      tags: string[]
      thumbnailUrl: string | null
      platform: $Enums.Platform
      scheduledAt: Date | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publicationMetadata"]>
    composites: {}
  }

  type PublicationMetadataGetPayload<S extends boolean | null | undefined | PublicationMetadataDefaultArgs> = $Result.GetResult<Prisma.$PublicationMetadataPayload, S>

  type PublicationMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationMetadataCountAggregateInputType | true
    }

  export interface PublicationMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicationMetadata'], meta: { name: 'PublicationMetadata' } }
    /**
     * Find zero or one PublicationMetadata that matches the filter.
     * @param {PublicationMetadataFindUniqueArgs} args - Arguments to find a PublicationMetadata
     * @example
     * // Get one PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationMetadataFindUniqueArgs>(args: SelectSubset<T, PublicationMetadataFindUniqueArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicationMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationMetadataFindUniqueOrThrowArgs} args - Arguments to find a PublicationMetadata
     * @example
     * // Get one PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicationMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataFindFirstArgs} args - Arguments to find a PublicationMetadata
     * @example
     * // Get one PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationMetadataFindFirstArgs>(args?: SelectSubset<T, PublicationMetadataFindFirstArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicationMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataFindFirstOrThrowArgs} args - Arguments to find a PublicationMetadata
     * @example
     * // Get one PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicationMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findMany()
     * 
     * // Get first 10 PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationMetadataWithIdOnly = await prisma.publicationMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationMetadataFindManyArgs>(args?: SelectSubset<T, PublicationMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicationMetadata.
     * @param {PublicationMetadataCreateArgs} args - Arguments to create a PublicationMetadata.
     * @example
     * // Create one PublicationMetadata
     * const PublicationMetadata = await prisma.publicationMetadata.create({
     *   data: {
     *     // ... data to create a PublicationMetadata
     *   }
     * })
     * 
     */
    create<T extends PublicationMetadataCreateArgs>(args: SelectSubset<T, PublicationMetadataCreateArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicationMetadata.
     * @param {PublicationMetadataCreateManyArgs} args - Arguments to create many PublicationMetadata.
     * @example
     * // Create many PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationMetadataCreateManyArgs>(args?: SelectSubset<T, PublicationMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicationMetadata and returns the data saved in the database.
     * @param {PublicationMetadataCreateManyAndReturnArgs} args - Arguments to create many PublicationMetadata.
     * @example
     * // Create many PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicationMetadata and only return the `id`
     * const publicationMetadataWithIdOnly = await prisma.publicationMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicationMetadata.
     * @param {PublicationMetadataDeleteArgs} args - Arguments to delete one PublicationMetadata.
     * @example
     * // Delete one PublicationMetadata
     * const PublicationMetadata = await prisma.publicationMetadata.delete({
     *   where: {
     *     // ... filter to delete one PublicationMetadata
     *   }
     * })
     * 
     */
    delete<T extends PublicationMetadataDeleteArgs>(args: SelectSubset<T, PublicationMetadataDeleteArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicationMetadata.
     * @param {PublicationMetadataUpdateArgs} args - Arguments to update one PublicationMetadata.
     * @example
     * // Update one PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationMetadataUpdateArgs>(args: SelectSubset<T, PublicationMetadataUpdateArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicationMetadata.
     * @param {PublicationMetadataDeleteManyArgs} args - Arguments to filter PublicationMetadata to delete.
     * @example
     * // Delete a few PublicationMetadata
     * const { count } = await prisma.publicationMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationMetadataDeleteManyArgs>(args?: SelectSubset<T, PublicationMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationMetadataUpdateManyArgs>(args: SelectSubset<T, PublicationMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationMetadata and returns the data updated in the database.
     * @param {PublicationMetadataUpdateManyAndReturnArgs} args - Arguments to update many PublicationMetadata.
     * @example
     * // Update many PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicationMetadata and only return the `id`
     * const publicationMetadataWithIdOnly = await prisma.publicationMetadata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicationMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicationMetadata.
     * @param {PublicationMetadataUpsertArgs} args - Arguments to update or create a PublicationMetadata.
     * @example
     * // Update or create a PublicationMetadata
     * const publicationMetadata = await prisma.publicationMetadata.upsert({
     *   create: {
     *     // ... data to create a PublicationMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationMetadata we want to update
     *   }
     * })
     */
    upsert<T extends PublicationMetadataUpsertArgs>(args: SelectSubset<T, PublicationMetadataUpsertArgs<ExtArgs>>): Prisma__PublicationMetadataClient<$Result.GetResult<Prisma.$PublicationMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicationMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataCountArgs} args - Arguments to filter PublicationMetadata to count.
     * @example
     * // Count the number of PublicationMetadata
     * const count = await prisma.publicationMetadata.count({
     *   where: {
     *     // ... the filter for the PublicationMetadata we want to count
     *   }
     * })
    **/
    count<T extends PublicationMetadataCountArgs>(
      args?: Subset<T, PublicationMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationMetadataAggregateArgs>(args: Subset<T, PublicationMetadataAggregateArgs>): Prisma.PrismaPromise<GetPublicationMetadataAggregateType<T>>

    /**
     * Group by PublicationMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationMetadataGroupByArgs} args - Group by arguments.
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
      T extends PublicationMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationMetadataGroupByArgs['orderBy'] }
        : { orderBy?: PublicationMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PublicationMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicationMetadata model
   */
  readonly fields: PublicationMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProject<T extends ContentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentProjectDefaultArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicationMetadata model
   */
  interface PublicationMetadataFieldRefs {
    readonly id: FieldRef<"PublicationMetadata", 'String'>
    readonly organizationId: FieldRef<"PublicationMetadata", 'String'>
    readonly projectId: FieldRef<"PublicationMetadata", 'String'>
    readonly title: FieldRef<"PublicationMetadata", 'String'>
    readonly description: FieldRef<"PublicationMetadata", 'String'>
    readonly tags: FieldRef<"PublicationMetadata", 'String[]'>
    readonly thumbnailUrl: FieldRef<"PublicationMetadata", 'String'>
    readonly platform: FieldRef<"PublicationMetadata", 'Platform'>
    readonly scheduledAt: FieldRef<"PublicationMetadata", 'DateTime'>
    readonly publishedAt: FieldRef<"PublicationMetadata", 'DateTime'>
    readonly createdAt: FieldRef<"PublicationMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"PublicationMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicationMetadata findUnique
   */
  export type PublicationMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter, which PublicationMetadata to fetch.
     */
    where: PublicationMetadataWhereUniqueInput
  }

  /**
   * PublicationMetadata findUniqueOrThrow
   */
  export type PublicationMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter, which PublicationMetadata to fetch.
     */
    where: PublicationMetadataWhereUniqueInput
  }

  /**
   * PublicationMetadata findFirst
   */
  export type PublicationMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter, which PublicationMetadata to fetch.
     */
    where?: PublicationMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationMetadata to fetch.
     */
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationMetadata.
     */
    cursor?: PublicationMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationMetadata.
     */
    distinct?: PublicationMetadataScalarFieldEnum | PublicationMetadataScalarFieldEnum[]
  }

  /**
   * PublicationMetadata findFirstOrThrow
   */
  export type PublicationMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter, which PublicationMetadata to fetch.
     */
    where?: PublicationMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationMetadata to fetch.
     */
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationMetadata.
     */
    cursor?: PublicationMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationMetadata.
     */
    distinct?: PublicationMetadataScalarFieldEnum | PublicationMetadataScalarFieldEnum[]
  }

  /**
   * PublicationMetadata findMany
   */
  export type PublicationMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter, which PublicationMetadata to fetch.
     */
    where?: PublicationMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationMetadata to fetch.
     */
    orderBy?: PublicationMetadataOrderByWithRelationInput | PublicationMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationMetadata.
     */
    cursor?: PublicationMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationMetadata.
     */
    distinct?: PublicationMetadataScalarFieldEnum | PublicationMetadataScalarFieldEnum[]
  }

  /**
   * PublicationMetadata create
   */
  export type PublicationMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicationMetadata.
     */
    data: XOR<PublicationMetadataCreateInput, PublicationMetadataUncheckedCreateInput>
  }

  /**
   * PublicationMetadata createMany
   */
  export type PublicationMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicationMetadata.
     */
    data: PublicationMetadataCreateManyInput | PublicationMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicationMetadata createManyAndReturn
   */
  export type PublicationMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many PublicationMetadata.
     */
    data: PublicationMetadataCreateManyInput | PublicationMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicationMetadata update
   */
  export type PublicationMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicationMetadata.
     */
    data: XOR<PublicationMetadataUpdateInput, PublicationMetadataUncheckedUpdateInput>
    /**
     * Choose, which PublicationMetadata to update.
     */
    where: PublicationMetadataWhereUniqueInput
  }

  /**
   * PublicationMetadata updateMany
   */
  export type PublicationMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicationMetadata.
     */
    data: XOR<PublicationMetadataUpdateManyMutationInput, PublicationMetadataUncheckedUpdateManyInput>
    /**
     * Filter which PublicationMetadata to update
     */
    where?: PublicationMetadataWhereInput
    /**
     * Limit how many PublicationMetadata to update.
     */
    limit?: number
  }

  /**
   * PublicationMetadata updateManyAndReturn
   */
  export type PublicationMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * The data used to update PublicationMetadata.
     */
    data: XOR<PublicationMetadataUpdateManyMutationInput, PublicationMetadataUncheckedUpdateManyInput>
    /**
     * Filter which PublicationMetadata to update
     */
    where?: PublicationMetadataWhereInput
    /**
     * Limit how many PublicationMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicationMetadata upsert
   */
  export type PublicationMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicationMetadata to update in case it exists.
     */
    where: PublicationMetadataWhereUniqueInput
    /**
     * In case the PublicationMetadata found by the `where` argument doesn't exist, create a new PublicationMetadata with this data.
     */
    create: XOR<PublicationMetadataCreateInput, PublicationMetadataUncheckedCreateInput>
    /**
     * In case the PublicationMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationMetadataUpdateInput, PublicationMetadataUncheckedUpdateInput>
  }

  /**
   * PublicationMetadata delete
   */
  export type PublicationMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
    /**
     * Filter which PublicationMetadata to delete.
     */
    where: PublicationMetadataWhereUniqueInput
  }

  /**
   * PublicationMetadata deleteMany
   */
  export type PublicationMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationMetadata to delete
     */
    where?: PublicationMetadataWhereInput
    /**
     * Limit how many PublicationMetadata to delete.
     */
    limit?: number
  }

  /**
   * PublicationMetadata without action
   */
  export type PublicationMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationMetadata
     */
    select?: PublicationMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationMetadata
     */
    omit?: PublicationMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationMetadataInclude<ExtArgs> | null
  }


  /**
   * Model ExportJob
   */

  export type AggregateExportJob = {
    _count: ExportJobCountAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  export type ExportJobMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    assetType: $Enums.AssetType | null
    status: $Enums.JobStatus | null
    outputUrl: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExportJobMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    projectId: string | null
    assetType: $Enums.AssetType | null
    status: $Enums.JobStatus | null
    outputUrl: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExportJobCountAggregateOutputType = {
    id: number
    organizationId: number
    projectId: number
    assetType: number
    status: number
    outputUrl: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExportJobMinAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    assetType?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExportJobMaxAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    assetType?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExportJobCountAggregateInputType = {
    id?: true
    organizationId?: true
    projectId?: true
    assetType?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJob to aggregate.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExportJobs
    **/
    _count?: true | ExportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportJobMaxAggregateInputType
  }

  export type GetExportJobAggregateType<T extends ExportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateExportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportJob[P]>
      : GetScalarType<T[P], AggregateExportJob[P]>
  }




  export type ExportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithAggregationInput | ExportJobOrderByWithAggregationInput[]
    by: ExportJobScalarFieldEnum[] | ExportJobScalarFieldEnum
    having?: ExportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportJobCountAggregateInputType | true
    _min?: ExportJobMinAggregateInputType
    _max?: ExportJobMaxAggregateInputType
  }

  export type ExportJobGroupByOutputType = {
    id: string
    organizationId: string
    projectId: string
    assetType: $Enums.AssetType
    status: $Enums.JobStatus
    outputUrl: string | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ExportJobCountAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  type GetExportJobGroupByPayload<T extends ExportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
            : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
        }
      >
    >


  export type ExportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    assetType?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    assetType?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    assetType?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectScalar = {
    id?: boolean
    organizationId?: boolean
    projectId?: boolean
    assetType?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "projectId" | "assetType" | "status" | "outputUrl" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["exportJob"]>
  export type ExportJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type ExportJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }
  export type ExportJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contentProject?: boolean | ContentProjectDefaultArgs<ExtArgs>
  }

  export type $ExportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExportJob"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contentProject: Prisma.$ContentProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      projectId: string
      assetType: $Enums.AssetType
      status: $Enums.JobStatus
      outputUrl: string | null
      errorMessage: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exportJob"]>
    composites: {}
  }

  type ExportJobGetPayload<S extends boolean | null | undefined | ExportJobDefaultArgs> = $Result.GetResult<Prisma.$ExportJobPayload, S>

  type ExportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportJobCountAggregateInputType | true
    }

  export interface ExportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExportJob'], meta: { name: 'ExportJob' } }
    /**
     * Find zero or one ExportJob that matches the filter.
     * @param {ExportJobFindUniqueArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportJobFindUniqueArgs>(args: SelectSubset<T, ExportJobFindUniqueArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportJobFindUniqueOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportJobFindFirstArgs>(args?: SelectSubset<T, ExportJobFindFirstArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportJobs
     * const exportJobs = await prisma.exportJob.findMany()
     * 
     * // Get first 10 ExportJobs
     * const exportJobs = await prisma.exportJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportJobFindManyArgs>(args?: SelectSubset<T, ExportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExportJob.
     * @param {ExportJobCreateArgs} args - Arguments to create a ExportJob.
     * @example
     * // Create one ExportJob
     * const ExportJob = await prisma.exportJob.create({
     *   data: {
     *     // ... data to create a ExportJob
     *   }
     * })
     * 
     */
    create<T extends ExportJobCreateArgs>(args: SelectSubset<T, ExportJobCreateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExportJobs.
     * @param {ExportJobCreateManyArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportJobCreateManyArgs>(args?: SelectSubset<T, ExportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExportJobs and returns the data saved in the database.
     * @param {ExportJobCreateManyAndReturnArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExportJob.
     * @param {ExportJobDeleteArgs} args - Arguments to delete one ExportJob.
     * @example
     * // Delete one ExportJob
     * const ExportJob = await prisma.exportJob.delete({
     *   where: {
     *     // ... filter to delete one ExportJob
     *   }
     * })
     * 
     */
    delete<T extends ExportJobDeleteArgs>(args: SelectSubset<T, ExportJobDeleteArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExportJob.
     * @param {ExportJobUpdateArgs} args - Arguments to update one ExportJob.
     * @example
     * // Update one ExportJob
     * const exportJob = await prisma.exportJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportJobUpdateArgs>(args: SelectSubset<T, ExportJobUpdateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExportJobs.
     * @param {ExportJobDeleteManyArgs} args - Arguments to filter ExportJobs to delete.
     * @example
     * // Delete a few ExportJobs
     * const { count } = await prisma.exportJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportJobDeleteManyArgs>(args?: SelectSubset<T, ExportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportJobUpdateManyArgs>(args: SelectSubset<T, ExportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs and returns the data updated in the database.
     * @param {ExportJobUpdateManyAndReturnArgs} args - Arguments to update many ExportJobs.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExportJob.
     * @param {ExportJobUpsertArgs} args - Arguments to update or create a ExportJob.
     * @example
     * // Update or create a ExportJob
     * const exportJob = await prisma.exportJob.upsert({
     *   create: {
     *     // ... data to create a ExportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportJob we want to update
     *   }
     * })
     */
    upsert<T extends ExportJobUpsertArgs>(args: SelectSubset<T, ExportJobUpsertArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobCountArgs} args - Arguments to filter ExportJobs to count.
     * @example
     * // Count the number of ExportJobs
     * const count = await prisma.exportJob.count({
     *   where: {
     *     // ... the filter for the ExportJobs we want to count
     *   }
     * })
    **/
    count<T extends ExportJobCountArgs>(
      args?: Subset<T, ExportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExportJobAggregateArgs>(args: Subset<T, ExportJobAggregateArgs>): Prisma.PrismaPromise<GetExportJobAggregateType<T>>

    /**
     * Group by ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobGroupByArgs} args - Group by arguments.
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
      T extends ExportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportJobGroupByArgs['orderBy'] }
        : { orderBy?: ExportJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExportJob model
   */
  readonly fields: ExportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contentProject<T extends ContentProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentProjectDefaultArgs<ExtArgs>>): Prisma__ContentProjectClient<$Result.GetResult<Prisma.$ContentProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExportJob model
   */
  interface ExportJobFieldRefs {
    readonly id: FieldRef<"ExportJob", 'String'>
    readonly organizationId: FieldRef<"ExportJob", 'String'>
    readonly projectId: FieldRef<"ExportJob", 'String'>
    readonly assetType: FieldRef<"ExportJob", 'AssetType'>
    readonly status: FieldRef<"ExportJob", 'JobStatus'>
    readonly outputUrl: FieldRef<"ExportJob", 'String'>
    readonly errorMessage: FieldRef<"ExportJob", 'String'>
    readonly startedAt: FieldRef<"ExportJob", 'DateTime'>
    readonly completedAt: FieldRef<"ExportJob", 'DateTime'>
    readonly createdAt: FieldRef<"ExportJob", 'DateTime'>
    readonly updatedAt: FieldRef<"ExportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExportJob findUnique
   */
  export type ExportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findUniqueOrThrow
   */
  export type ExportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findFirst
   */
  export type ExportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findFirstOrThrow
   */
  export type ExportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findMany
   */
  export type ExportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJobs to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob create
   */
  export type ExportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ExportJob.
     */
    data: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
  }

  /**
   * ExportJob createMany
   */
  export type ExportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportJob createManyAndReturn
   */
  export type ExportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportJob update
   */
  export type ExportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ExportJob.
     */
    data: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
    /**
     * Choose, which ExportJob to update.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob updateMany
   */
  export type ExportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
  }

  /**
   * ExportJob updateManyAndReturn
   */
  export type ExportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportJob upsert
   */
  export type ExportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ExportJob to update in case it exists.
     */
    where: ExportJobWhereUniqueInput
    /**
     * In case the ExportJob found by the `where` argument doesn't exist, create a new ExportJob with this data.
     */
    create: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
    /**
     * In case the ExportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
  }

  /**
   * ExportJob delete
   */
  export type ExportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter which ExportJob to delete.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob deleteMany
   */
  export type ExportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJobs to delete
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to delete.
     */
    limit?: number
  }

  /**
   * ExportJob without action
   */
  export type ExportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    name: 'name',
    role: 'role',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ChannelProfileScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    name: 'name',
    platform: 'platform',
    niche: 'niche',
    tone: 'tone',
    narrationStyle: 'narrationStyle',
    languageCode: 'languageCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelProfileScalarFieldEnum = (typeof ChannelProfileScalarFieldEnum)[keyof typeof ChannelProfileScalarFieldEnum]


  export const ContentProjectScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    channelProfileId: 'channelProfileId',
    title: 'title',
    keyword: 'keyword',
    niche: 'niche',
    format: 'format',
    status: 'status',
    durationMinutes: 'durationMinutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentProjectScalarFieldEnum = (typeof ContentProjectScalarFieldEnum)[keyof typeof ContentProjectScalarFieldEnum]


  export const TrendAnalysisScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    projectId: 'projectId',
    keyword: 'keyword',
    data: 'data',
    analyzedAt: 'analyzedAt',
    createdAt: 'createdAt'
  };

  export type TrendAnalysisScalarFieldEnum = (typeof TrendAnalysisScalarFieldEnum)[keyof typeof TrendAnalysisScalarFieldEnum]


  export const ScriptScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    projectId: 'projectId',
    blocks: 'blocks',
    wordCount: 'wordCount',
    estimatedDurationSecs: 'estimatedDurationSecs',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScriptScalarFieldEnum = (typeof ScriptScalarFieldEnum)[keyof typeof ScriptScalarFieldEnum]


  export const NarrationScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    scriptId: 'scriptId',
    provider: 'provider',
    voiceId: 'voiceId',
    audioUrl: 'audioUrl',
    durationSecs: 'durationSecs',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NarrationScalarFieldEnum = (typeof NarrationScalarFieldEnum)[keyof typeof NarrationScalarFieldEnum]


  export const MediaSuggestionScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    projectId: 'projectId',
    type: 'type',
    prompt: 'prompt',
    url: 'url',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type MediaSuggestionScalarFieldEnum = (typeof MediaSuggestionScalarFieldEnum)[keyof typeof MediaSuggestionScalarFieldEnum]


  export const PublicationMetadataScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    thumbnailUrl: 'thumbnailUrl',
    platform: 'platform',
    scheduledAt: 'scheduledAt',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationMetadataScalarFieldEnum = (typeof PublicationMetadataScalarFieldEnum)[keyof typeof PublicationMetadataScalarFieldEnum]


  export const ExportJobScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    projectId: 'projectId',
    assetType: 'assetType',
    status: 'status',
    outputUrl: 'outputUrl',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExportJobScalarFieldEnum = (typeof ExportJobScalarFieldEnum)[keyof typeof ExportJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'NicheCategory'
   */
  export type EnumNicheCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NicheCategory'>
    


  /**
   * Reference to a field of type 'NicheCategory[]'
   */
  export type ListEnumNicheCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NicheCategory[]'>
    


  /**
   * Reference to a field of type 'ContentTone'
   */
  export type EnumContentToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentTone'>
    


  /**
   * Reference to a field of type 'ContentTone[]'
   */
  export type ListEnumContentToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentTone[]'>
    


  /**
   * Reference to a field of type 'NarrationStyle'
   */
  export type EnumNarrationStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NarrationStyle'>
    


  /**
   * Reference to a field of type 'NarrationStyle[]'
   */
  export type ListEnumNarrationStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NarrationStyle[]'>
    


  /**
   * Reference to a field of type 'FormatType'
   */
  export type EnumFormatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormatType'>
    


  /**
   * Reference to a field of type 'FormatType[]'
   */
  export type ListEnumFormatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormatType[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TtsProvider'
   */
  export type EnumTtsProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TtsProvider'>
    


  /**
   * Reference to a field of type 'TtsProvider[]'
   */
  export type ListEnumTtsProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TtsProvider[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    plan?: EnumPlanFilter<"Organization"> | $Enums.Plan
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    channelProfiles?: ChannelProfileListRelationFilter
    contentProjects?: ContentProjectListRelationFilter
    trendAnalyses?: TrendAnalysisListRelationFilter
    scripts?: ScriptListRelationFilter
    narrations?: NarrationListRelationFilter
    mediaSuggestions?: MediaSuggestionListRelationFilter
    publicationMetadata?: PublicationMetadataListRelationFilter
    exportJobs?: ExportJobListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    channelProfiles?: ChannelProfileOrderByRelationAggregateInput
    contentProjects?: ContentProjectOrderByRelationAggregateInput
    trendAnalyses?: TrendAnalysisOrderByRelationAggregateInput
    scripts?: ScriptOrderByRelationAggregateInput
    narrations?: NarrationOrderByRelationAggregateInput
    mediaSuggestions?: MediaSuggestionOrderByRelationAggregateInput
    publicationMetadata?: PublicationMetadataOrderByRelationAggregateInput
    exportJobs?: ExportJobOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    plan?: EnumPlanFilter<"Organization"> | $Enums.Plan
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    channelProfiles?: ChannelProfileListRelationFilter
    contentProjects?: ContentProjectListRelationFilter
    trendAnalyses?: TrendAnalysisListRelationFilter
    scripts?: ScriptListRelationFilter
    narrations?: NarrationListRelationFilter
    mediaSuggestions?: MediaSuggestionListRelationFilter
    publicationMetadata?: PublicationMetadataListRelationFilter
    exportJobs?: ExportJobListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    plan?: EnumPlanWithAggregatesFilter<"Organization"> | $Enums.Plan
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    channelProfiles?: ChannelProfileListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    channelProfiles?: ChannelProfileOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    organizationId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    channelProfiles?: ChannelProfileListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type ChannelProfileWhereInput = {
    AND?: ChannelProfileWhereInput | ChannelProfileWhereInput[]
    OR?: ChannelProfileWhereInput[]
    NOT?: ChannelProfileWhereInput | ChannelProfileWhereInput[]
    id?: StringFilter<"ChannelProfile"> | string
    organizationId?: StringFilter<"ChannelProfile"> | string
    userId?: StringFilter<"ChannelProfile"> | string
    name?: StringFilter<"ChannelProfile"> | string
    platform?: EnumPlatformFilter<"ChannelProfile"> | $Enums.Platform
    niche?: EnumNicheCategoryFilter<"ChannelProfile"> | $Enums.NicheCategory
    tone?: EnumContentToneFilter<"ChannelProfile"> | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFilter<"ChannelProfile"> | $Enums.NarrationStyle
    languageCode?: StringFilter<"ChannelProfile"> | string
    createdAt?: DateTimeFilter<"ChannelProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelProfile"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contentProjects?: ContentProjectListRelationFilter
  }

  export type ChannelProfileOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    niche?: SortOrder
    tone?: SortOrder
    narrationStyle?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    contentProjects?: ContentProjectOrderByRelationAggregateInput
  }

  export type ChannelProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelProfileWhereInput | ChannelProfileWhereInput[]
    OR?: ChannelProfileWhereInput[]
    NOT?: ChannelProfileWhereInput | ChannelProfileWhereInput[]
    organizationId?: StringFilter<"ChannelProfile"> | string
    userId?: StringFilter<"ChannelProfile"> | string
    name?: StringFilter<"ChannelProfile"> | string
    platform?: EnumPlatformFilter<"ChannelProfile"> | $Enums.Platform
    niche?: EnumNicheCategoryFilter<"ChannelProfile"> | $Enums.NicheCategory
    tone?: EnumContentToneFilter<"ChannelProfile"> | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFilter<"ChannelProfile"> | $Enums.NarrationStyle
    languageCode?: StringFilter<"ChannelProfile"> | string
    createdAt?: DateTimeFilter<"ChannelProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelProfile"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contentProjects?: ContentProjectListRelationFilter
  }, "id">

  export type ChannelProfileOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    niche?: SortOrder
    tone?: SortOrder
    narrationStyle?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelProfileCountOrderByAggregateInput
    _max?: ChannelProfileMaxOrderByAggregateInput
    _min?: ChannelProfileMinOrderByAggregateInput
  }

  export type ChannelProfileScalarWhereWithAggregatesInput = {
    AND?: ChannelProfileScalarWhereWithAggregatesInput | ChannelProfileScalarWhereWithAggregatesInput[]
    OR?: ChannelProfileScalarWhereWithAggregatesInput[]
    NOT?: ChannelProfileScalarWhereWithAggregatesInput | ChannelProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelProfile"> | string
    organizationId?: StringWithAggregatesFilter<"ChannelProfile"> | string
    userId?: StringWithAggregatesFilter<"ChannelProfile"> | string
    name?: StringWithAggregatesFilter<"ChannelProfile"> | string
    platform?: EnumPlatformWithAggregatesFilter<"ChannelProfile"> | $Enums.Platform
    niche?: EnumNicheCategoryWithAggregatesFilter<"ChannelProfile"> | $Enums.NicheCategory
    tone?: EnumContentToneWithAggregatesFilter<"ChannelProfile"> | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleWithAggregatesFilter<"ChannelProfile"> | $Enums.NarrationStyle
    languageCode?: StringWithAggregatesFilter<"ChannelProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChannelProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChannelProfile"> | Date | string
  }

  export type ContentProjectWhereInput = {
    AND?: ContentProjectWhereInput | ContentProjectWhereInput[]
    OR?: ContentProjectWhereInput[]
    NOT?: ContentProjectWhereInput | ContentProjectWhereInput[]
    id?: StringFilter<"ContentProject"> | string
    organizationId?: StringFilter<"ContentProject"> | string
    channelProfileId?: StringFilter<"ContentProject"> | string
    title?: StringFilter<"ContentProject"> | string
    keyword?: StringFilter<"ContentProject"> | string
    niche?: EnumNicheCategoryFilter<"ContentProject"> | $Enums.NicheCategory
    format?: EnumFormatTypeFilter<"ContentProject"> | $Enums.FormatType
    status?: EnumProjectStatusFilter<"ContentProject"> | $Enums.ProjectStatus
    durationMinutes?: IntNullableFilter<"ContentProject"> | number | null
    createdAt?: DateTimeFilter<"ContentProject"> | Date | string
    updatedAt?: DateTimeFilter<"ContentProject"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    channelProfile?: XOR<ChannelProfileScalarRelationFilter, ChannelProfileWhereInput>
    trendAnalyses?: TrendAnalysisListRelationFilter
    scripts?: ScriptListRelationFilter
    mediaSuggestions?: MediaSuggestionListRelationFilter
    publicationMetadata?: PublicationMetadataListRelationFilter
    exportJobs?: ExportJobListRelationFilter
  }

  export type ContentProjectOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    channelProfileId?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    niche?: SortOrder
    format?: SortOrder
    status?: SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    channelProfile?: ChannelProfileOrderByWithRelationInput
    trendAnalyses?: TrendAnalysisOrderByRelationAggregateInput
    scripts?: ScriptOrderByRelationAggregateInput
    mediaSuggestions?: MediaSuggestionOrderByRelationAggregateInput
    publicationMetadata?: PublicationMetadataOrderByRelationAggregateInput
    exportJobs?: ExportJobOrderByRelationAggregateInput
  }

  export type ContentProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentProjectWhereInput | ContentProjectWhereInput[]
    OR?: ContentProjectWhereInput[]
    NOT?: ContentProjectWhereInput | ContentProjectWhereInput[]
    organizationId?: StringFilter<"ContentProject"> | string
    channelProfileId?: StringFilter<"ContentProject"> | string
    title?: StringFilter<"ContentProject"> | string
    keyword?: StringFilter<"ContentProject"> | string
    niche?: EnumNicheCategoryFilter<"ContentProject"> | $Enums.NicheCategory
    format?: EnumFormatTypeFilter<"ContentProject"> | $Enums.FormatType
    status?: EnumProjectStatusFilter<"ContentProject"> | $Enums.ProjectStatus
    durationMinutes?: IntNullableFilter<"ContentProject"> | number | null
    createdAt?: DateTimeFilter<"ContentProject"> | Date | string
    updatedAt?: DateTimeFilter<"ContentProject"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    channelProfile?: XOR<ChannelProfileScalarRelationFilter, ChannelProfileWhereInput>
    trendAnalyses?: TrendAnalysisListRelationFilter
    scripts?: ScriptListRelationFilter
    mediaSuggestions?: MediaSuggestionListRelationFilter
    publicationMetadata?: PublicationMetadataListRelationFilter
    exportJobs?: ExportJobListRelationFilter
  }, "id">

  export type ContentProjectOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    channelProfileId?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    niche?: SortOrder
    format?: SortOrder
    status?: SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentProjectCountOrderByAggregateInput
    _avg?: ContentProjectAvgOrderByAggregateInput
    _max?: ContentProjectMaxOrderByAggregateInput
    _min?: ContentProjectMinOrderByAggregateInput
    _sum?: ContentProjectSumOrderByAggregateInput
  }

  export type ContentProjectScalarWhereWithAggregatesInput = {
    AND?: ContentProjectScalarWhereWithAggregatesInput | ContentProjectScalarWhereWithAggregatesInput[]
    OR?: ContentProjectScalarWhereWithAggregatesInput[]
    NOT?: ContentProjectScalarWhereWithAggregatesInput | ContentProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentProject"> | string
    organizationId?: StringWithAggregatesFilter<"ContentProject"> | string
    channelProfileId?: StringWithAggregatesFilter<"ContentProject"> | string
    title?: StringWithAggregatesFilter<"ContentProject"> | string
    keyword?: StringWithAggregatesFilter<"ContentProject"> | string
    niche?: EnumNicheCategoryWithAggregatesFilter<"ContentProject"> | $Enums.NicheCategory
    format?: EnumFormatTypeWithAggregatesFilter<"ContentProject"> | $Enums.FormatType
    status?: EnumProjectStatusWithAggregatesFilter<"ContentProject"> | $Enums.ProjectStatus
    durationMinutes?: IntNullableWithAggregatesFilter<"ContentProject"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ContentProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentProject"> | Date | string
  }

  export type TrendAnalysisWhereInput = {
    AND?: TrendAnalysisWhereInput | TrendAnalysisWhereInput[]
    OR?: TrendAnalysisWhereInput[]
    NOT?: TrendAnalysisWhereInput | TrendAnalysisWhereInput[]
    id?: StringFilter<"TrendAnalysis"> | string
    organizationId?: StringFilter<"TrendAnalysis"> | string
    projectId?: StringFilter<"TrendAnalysis"> | string
    keyword?: StringFilter<"TrendAnalysis"> | string
    data?: JsonFilter<"TrendAnalysis">
    analyzedAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }

  export type TrendAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    keyword?: SortOrder
    data?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contentProject?: ContentProjectOrderByWithRelationInput
  }

  export type TrendAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrendAnalysisWhereInput | TrendAnalysisWhereInput[]
    OR?: TrendAnalysisWhereInput[]
    NOT?: TrendAnalysisWhereInput | TrendAnalysisWhereInput[]
    organizationId?: StringFilter<"TrendAnalysis"> | string
    projectId?: StringFilter<"TrendAnalysis"> | string
    keyword?: StringFilter<"TrendAnalysis"> | string
    data?: JsonFilter<"TrendAnalysis">
    analyzedAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }, "id">

  export type TrendAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    keyword?: SortOrder
    data?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
    _count?: TrendAnalysisCountOrderByAggregateInput
    _max?: TrendAnalysisMaxOrderByAggregateInput
    _min?: TrendAnalysisMinOrderByAggregateInput
  }

  export type TrendAnalysisScalarWhereWithAggregatesInput = {
    AND?: TrendAnalysisScalarWhereWithAggregatesInput | TrendAnalysisScalarWhereWithAggregatesInput[]
    OR?: TrendAnalysisScalarWhereWithAggregatesInput[]
    NOT?: TrendAnalysisScalarWhereWithAggregatesInput | TrendAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrendAnalysis"> | string
    organizationId?: StringWithAggregatesFilter<"TrendAnalysis"> | string
    projectId?: StringWithAggregatesFilter<"TrendAnalysis"> | string
    keyword?: StringWithAggregatesFilter<"TrendAnalysis"> | string
    data?: JsonWithAggregatesFilter<"TrendAnalysis">
    analyzedAt?: DateTimeWithAggregatesFilter<"TrendAnalysis"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TrendAnalysis"> | Date | string
  }

  export type ScriptWhereInput = {
    AND?: ScriptWhereInput | ScriptWhereInput[]
    OR?: ScriptWhereInput[]
    NOT?: ScriptWhereInput | ScriptWhereInput[]
    id?: StringFilter<"Script"> | string
    organizationId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    blocks?: JsonFilter<"Script">
    wordCount?: IntNullableFilter<"Script"> | number | null
    estimatedDurationSecs?: IntNullableFilter<"Script"> | number | null
    version?: IntFilter<"Script"> | number
    createdAt?: DateTimeFilter<"Script"> | Date | string
    updatedAt?: DateTimeFilter<"Script"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
    narrations?: NarrationListRelationFilter
  }

  export type ScriptOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    blocks?: SortOrder
    wordCount?: SortOrderInput | SortOrder
    estimatedDurationSecs?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contentProject?: ContentProjectOrderByWithRelationInput
    narrations?: NarrationOrderByRelationAggregateInput
  }

  export type ScriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScriptWhereInput | ScriptWhereInput[]
    OR?: ScriptWhereInput[]
    NOT?: ScriptWhereInput | ScriptWhereInput[]
    organizationId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    blocks?: JsonFilter<"Script">
    wordCount?: IntNullableFilter<"Script"> | number | null
    estimatedDurationSecs?: IntNullableFilter<"Script"> | number | null
    version?: IntFilter<"Script"> | number
    createdAt?: DateTimeFilter<"Script"> | Date | string
    updatedAt?: DateTimeFilter<"Script"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
    narrations?: NarrationListRelationFilter
  }, "id">

  export type ScriptOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    blocks?: SortOrder
    wordCount?: SortOrderInput | SortOrder
    estimatedDurationSecs?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScriptCountOrderByAggregateInput
    _avg?: ScriptAvgOrderByAggregateInput
    _max?: ScriptMaxOrderByAggregateInput
    _min?: ScriptMinOrderByAggregateInput
    _sum?: ScriptSumOrderByAggregateInput
  }

  export type ScriptScalarWhereWithAggregatesInput = {
    AND?: ScriptScalarWhereWithAggregatesInput | ScriptScalarWhereWithAggregatesInput[]
    OR?: ScriptScalarWhereWithAggregatesInput[]
    NOT?: ScriptScalarWhereWithAggregatesInput | ScriptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Script"> | string
    organizationId?: StringWithAggregatesFilter<"Script"> | string
    projectId?: StringWithAggregatesFilter<"Script"> | string
    blocks?: JsonWithAggregatesFilter<"Script">
    wordCount?: IntNullableWithAggregatesFilter<"Script"> | number | null
    estimatedDurationSecs?: IntNullableWithAggregatesFilter<"Script"> | number | null
    version?: IntWithAggregatesFilter<"Script"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Script"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Script"> | Date | string
  }

  export type NarrationWhereInput = {
    AND?: NarrationWhereInput | NarrationWhereInput[]
    OR?: NarrationWhereInput[]
    NOT?: NarrationWhereInput | NarrationWhereInput[]
    id?: StringFilter<"Narration"> | string
    organizationId?: StringFilter<"Narration"> | string
    scriptId?: StringFilter<"Narration"> | string
    provider?: EnumTtsProviderFilter<"Narration"> | $Enums.TtsProvider
    voiceId?: StringNullableFilter<"Narration"> | string | null
    audioUrl?: StringNullableFilter<"Narration"> | string | null
    durationSecs?: FloatNullableFilter<"Narration"> | number | null
    status?: EnumJobStatusFilter<"Narration"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Narration"> | Date | string
    updatedAt?: DateTimeFilter<"Narration"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    script?: XOR<ScriptScalarRelationFilter, ScriptWhereInput>
  }

  export type NarrationOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    scriptId?: SortOrder
    provider?: SortOrder
    voiceId?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    durationSecs?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    script?: ScriptOrderByWithRelationInput
  }

  export type NarrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NarrationWhereInput | NarrationWhereInput[]
    OR?: NarrationWhereInput[]
    NOT?: NarrationWhereInput | NarrationWhereInput[]
    organizationId?: StringFilter<"Narration"> | string
    scriptId?: StringFilter<"Narration"> | string
    provider?: EnumTtsProviderFilter<"Narration"> | $Enums.TtsProvider
    voiceId?: StringNullableFilter<"Narration"> | string | null
    audioUrl?: StringNullableFilter<"Narration"> | string | null
    durationSecs?: FloatNullableFilter<"Narration"> | number | null
    status?: EnumJobStatusFilter<"Narration"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Narration"> | Date | string
    updatedAt?: DateTimeFilter<"Narration"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    script?: XOR<ScriptScalarRelationFilter, ScriptWhereInput>
  }, "id">

  export type NarrationOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    scriptId?: SortOrder
    provider?: SortOrder
    voiceId?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    durationSecs?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NarrationCountOrderByAggregateInput
    _avg?: NarrationAvgOrderByAggregateInput
    _max?: NarrationMaxOrderByAggregateInput
    _min?: NarrationMinOrderByAggregateInput
    _sum?: NarrationSumOrderByAggregateInput
  }

  export type NarrationScalarWhereWithAggregatesInput = {
    AND?: NarrationScalarWhereWithAggregatesInput | NarrationScalarWhereWithAggregatesInput[]
    OR?: NarrationScalarWhereWithAggregatesInput[]
    NOT?: NarrationScalarWhereWithAggregatesInput | NarrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Narration"> | string
    organizationId?: StringWithAggregatesFilter<"Narration"> | string
    scriptId?: StringWithAggregatesFilter<"Narration"> | string
    provider?: EnumTtsProviderWithAggregatesFilter<"Narration"> | $Enums.TtsProvider
    voiceId?: StringNullableWithAggregatesFilter<"Narration"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Narration"> | string | null
    durationSecs?: FloatNullableWithAggregatesFilter<"Narration"> | number | null
    status?: EnumJobStatusWithAggregatesFilter<"Narration"> | $Enums.JobStatus
    createdAt?: DateTimeWithAggregatesFilter<"Narration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Narration"> | Date | string
  }

  export type MediaSuggestionWhereInput = {
    AND?: MediaSuggestionWhereInput | MediaSuggestionWhereInput[]
    OR?: MediaSuggestionWhereInput[]
    NOT?: MediaSuggestionWhereInput | MediaSuggestionWhereInput[]
    id?: StringFilter<"MediaSuggestion"> | string
    organizationId?: StringFilter<"MediaSuggestion"> | string
    projectId?: StringFilter<"MediaSuggestion"> | string
    type?: EnumAssetTypeFilter<"MediaSuggestion"> | $Enums.AssetType
    prompt?: StringNullableFilter<"MediaSuggestion"> | string | null
    url?: StringNullableFilter<"MediaSuggestion"> | string | null
    metadata?: JsonNullableFilter<"MediaSuggestion">
    createdAt?: DateTimeFilter<"MediaSuggestion"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }

  export type MediaSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    prompt?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contentProject?: ContentProjectOrderByWithRelationInput
  }

  export type MediaSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaSuggestionWhereInput | MediaSuggestionWhereInput[]
    OR?: MediaSuggestionWhereInput[]
    NOT?: MediaSuggestionWhereInput | MediaSuggestionWhereInput[]
    organizationId?: StringFilter<"MediaSuggestion"> | string
    projectId?: StringFilter<"MediaSuggestion"> | string
    type?: EnumAssetTypeFilter<"MediaSuggestion"> | $Enums.AssetType
    prompt?: StringNullableFilter<"MediaSuggestion"> | string | null
    url?: StringNullableFilter<"MediaSuggestion"> | string | null
    metadata?: JsonNullableFilter<"MediaSuggestion">
    createdAt?: DateTimeFilter<"MediaSuggestion"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }, "id">

  export type MediaSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    prompt?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MediaSuggestionCountOrderByAggregateInput
    _max?: MediaSuggestionMaxOrderByAggregateInput
    _min?: MediaSuggestionMinOrderByAggregateInput
  }

  export type MediaSuggestionScalarWhereWithAggregatesInput = {
    AND?: MediaSuggestionScalarWhereWithAggregatesInput | MediaSuggestionScalarWhereWithAggregatesInput[]
    OR?: MediaSuggestionScalarWhereWithAggregatesInput[]
    NOT?: MediaSuggestionScalarWhereWithAggregatesInput | MediaSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaSuggestion"> | string
    organizationId?: StringWithAggregatesFilter<"MediaSuggestion"> | string
    projectId?: StringWithAggregatesFilter<"MediaSuggestion"> | string
    type?: EnumAssetTypeWithAggregatesFilter<"MediaSuggestion"> | $Enums.AssetType
    prompt?: StringNullableWithAggregatesFilter<"MediaSuggestion"> | string | null
    url?: StringNullableWithAggregatesFilter<"MediaSuggestion"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"MediaSuggestion">
    createdAt?: DateTimeWithAggregatesFilter<"MediaSuggestion"> | Date | string
  }

  export type PublicationMetadataWhereInput = {
    AND?: PublicationMetadataWhereInput | PublicationMetadataWhereInput[]
    OR?: PublicationMetadataWhereInput[]
    NOT?: PublicationMetadataWhereInput | PublicationMetadataWhereInput[]
    id?: StringFilter<"PublicationMetadata"> | string
    organizationId?: StringFilter<"PublicationMetadata"> | string
    projectId?: StringFilter<"PublicationMetadata"> | string
    title?: StringNullableFilter<"PublicationMetadata"> | string | null
    description?: StringNullableFilter<"PublicationMetadata"> | string | null
    tags?: StringNullableListFilter<"PublicationMetadata">
    thumbnailUrl?: StringNullableFilter<"PublicationMetadata"> | string | null
    platform?: EnumPlatformFilter<"PublicationMetadata"> | $Enums.Platform
    scheduledAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    createdAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }

  export type PublicationMetadataOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    platform?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contentProject?: ContentProjectOrderByWithRelationInput
  }

  export type PublicationMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: PublicationMetadataWhereInput | PublicationMetadataWhereInput[]
    OR?: PublicationMetadataWhereInput[]
    NOT?: PublicationMetadataWhereInput | PublicationMetadataWhereInput[]
    organizationId?: StringFilter<"PublicationMetadata"> | string
    title?: StringNullableFilter<"PublicationMetadata"> | string | null
    description?: StringNullableFilter<"PublicationMetadata"> | string | null
    tags?: StringNullableListFilter<"PublicationMetadata">
    thumbnailUrl?: StringNullableFilter<"PublicationMetadata"> | string | null
    platform?: EnumPlatformFilter<"PublicationMetadata"> | $Enums.Platform
    scheduledAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    createdAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }, "id" | "projectId">

  export type PublicationMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    platform?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationMetadataCountOrderByAggregateInput
    _max?: PublicationMetadataMaxOrderByAggregateInput
    _min?: PublicationMetadataMinOrderByAggregateInput
  }

  export type PublicationMetadataScalarWhereWithAggregatesInput = {
    AND?: PublicationMetadataScalarWhereWithAggregatesInput | PublicationMetadataScalarWhereWithAggregatesInput[]
    OR?: PublicationMetadataScalarWhereWithAggregatesInput[]
    NOT?: PublicationMetadataScalarWhereWithAggregatesInput | PublicationMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicationMetadata"> | string
    organizationId?: StringWithAggregatesFilter<"PublicationMetadata"> | string
    projectId?: StringWithAggregatesFilter<"PublicationMetadata"> | string
    title?: StringNullableWithAggregatesFilter<"PublicationMetadata"> | string | null
    description?: StringNullableWithAggregatesFilter<"PublicationMetadata"> | string | null
    tags?: StringNullableListFilter<"PublicationMetadata">
    thumbnailUrl?: StringNullableWithAggregatesFilter<"PublicationMetadata"> | string | null
    platform?: EnumPlatformWithAggregatesFilter<"PublicationMetadata"> | $Enums.Platform
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"PublicationMetadata"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"PublicationMetadata"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PublicationMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublicationMetadata"> | Date | string
  }

  export type ExportJobWhereInput = {
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    id?: StringFilter<"ExportJob"> | string
    organizationId?: StringFilter<"ExportJob"> | string
    projectId?: StringFilter<"ExportJob"> | string
    assetType?: EnumAssetTypeFilter<"ExportJob"> | $Enums.AssetType
    status?: EnumJobStatusFilter<"ExportJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    startedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }

  export type ExportJobOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    assetType?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contentProject?: ContentProjectOrderByWithRelationInput
  }

  export type ExportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    organizationId?: StringFilter<"ExportJob"> | string
    projectId?: StringFilter<"ExportJob"> | string
    assetType?: EnumAssetTypeFilter<"ExportJob"> | $Enums.AssetType
    status?: EnumJobStatusFilter<"ExportJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    startedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contentProject?: XOR<ContentProjectScalarRelationFilter, ContentProjectWhereInput>
  }, "id">

  export type ExportJobOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    assetType?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExportJobCountOrderByAggregateInput
    _max?: ExportJobMaxOrderByAggregateInput
    _min?: ExportJobMinOrderByAggregateInput
  }

  export type ExportJobScalarWhereWithAggregatesInput = {
    AND?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    OR?: ExportJobScalarWhereWithAggregatesInput[]
    NOT?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExportJob"> | string
    organizationId?: StringWithAggregatesFilter<"ExportJob"> | string
    projectId?: StringWithAggregatesFilter<"ExportJob"> | string
    assetType?: EnumAssetTypeWithAggregatesFilter<"ExportJob"> | $Enums.AssetType
    status?: EnumJobStatusWithAggregatesFilter<"ExportJob"> | $Enums.JobStatus
    outputUrl?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"ExportJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    organizationId: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    organizationId: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelProfileCreateInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutChannelProfilesInput
    user: UserCreateNestedOneWithoutChannelProfilesInput
    contentProjects?: ContentProjectCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileUncheckedCreateInput = {
    id?: string
    organizationId: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutChannelProfilesNestedInput
    user?: UserUpdateOneRequiredWithoutChannelProfilesNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileCreateManyInput = {
    id?: string
    organizationId: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentProjectCreateInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectCreateManyInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisCreateInput = {
    id?: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTrendAnalysesInput
    contentProject: ContentProjectCreateNestedOneWithoutTrendAnalysesInput
  }

  export type TrendAnalysisUncheckedCreateInput = {
    id?: string
    organizationId: string
    projectId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type TrendAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTrendAnalysesNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutTrendAnalysesNestedInput
  }

  export type TrendAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisCreateManyInput = {
    id?: string
    organizationId: string
    projectId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type TrendAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptCreateInput = {
    id?: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutScriptsInput
    contentProject: ContentProjectCreateNestedOneWithoutScriptsInput
    narrations?: NarrationCreateNestedManyWithoutScriptInput
  }

  export type ScriptUncheckedCreateInput = {
    id?: string
    organizationId: string
    projectId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    narrations?: NarrationUncheckedCreateNestedManyWithoutScriptInput
  }

  export type ScriptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutScriptsNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutScriptsNestedInput
    narrations?: NarrationUpdateManyWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    narrations?: NarrationUncheckedUpdateManyWithoutScriptNestedInput
  }

  export type ScriptCreateManyInput = {
    id?: string
    organizationId: string
    projectId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScriptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationCreateInput = {
    id?: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutNarrationsInput
    script: ScriptCreateNestedOneWithoutNarrationsInput
  }

  export type NarrationUncheckedCreateInput = {
    id?: string
    organizationId: string
    scriptId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutNarrationsNestedInput
    script?: ScriptUpdateOneRequiredWithoutNarrationsNestedInput
  }

  export type NarrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    scriptId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationCreateManyInput = {
    id?: string
    organizationId: string
    scriptId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    scriptId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionCreateInput = {
    id?: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMediaSuggestionsInput
    contentProject: ContentProjectCreateNestedOneWithoutMediaSuggestionsInput
  }

  export type MediaSuggestionUncheckedCreateInput = {
    id?: string
    organizationId: string
    projectId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MediaSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMediaSuggestionsNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutMediaSuggestionsNestedInput
  }

  export type MediaSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionCreateManyInput = {
    id?: string
    organizationId: string
    projectId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MediaSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPublicationMetadataInput
    contentProject: ContentProjectCreateNestedOneWithoutPublicationMetadataInput
  }

  export type PublicationMetadataUncheckedCreateInput = {
    id?: string
    organizationId: string
    projectId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPublicationMetadataNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutPublicationMetadataNestedInput
  }

  export type PublicationMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataCreateManyInput = {
    id?: string
    organizationId: string
    projectId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobCreateInput = {
    id?: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutExportJobsInput
    contentProject: ContentProjectCreateNestedOneWithoutExportJobsInput
  }

  export type ExportJobUncheckedCreateInput = {
    id?: string
    organizationId: string
    projectId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutExportJobsNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutExportJobsNestedInput
  }

  export type ExportJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobCreateManyInput = {
    id?: string
    organizationId: string
    projectId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ChannelProfileListRelationFilter = {
    every?: ChannelProfileWhereInput
    some?: ChannelProfileWhereInput
    none?: ChannelProfileWhereInput
  }

  export type ContentProjectListRelationFilter = {
    every?: ContentProjectWhereInput
    some?: ContentProjectWhereInput
    none?: ContentProjectWhereInput
  }

  export type TrendAnalysisListRelationFilter = {
    every?: TrendAnalysisWhereInput
    some?: TrendAnalysisWhereInput
    none?: TrendAnalysisWhereInput
  }

  export type ScriptListRelationFilter = {
    every?: ScriptWhereInput
    some?: ScriptWhereInput
    none?: ScriptWhereInput
  }

  export type NarrationListRelationFilter = {
    every?: NarrationWhereInput
    some?: NarrationWhereInput
    none?: NarrationWhereInput
  }

  export type MediaSuggestionListRelationFilter = {
    every?: MediaSuggestionWhereInput
    some?: MediaSuggestionWhereInput
    none?: MediaSuggestionWhereInput
  }

  export type PublicationMetadataListRelationFilter = {
    every?: PublicationMetadataWhereInput
    some?: PublicationMetadataWhereInput
    none?: PublicationMetadataWhereInput
  }

  export type ExportJobListRelationFilter = {
    every?: ExportJobWhereInput
    some?: ExportJobWhereInput
    none?: ExportJobWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrendAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScriptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NarrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaSuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExportJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type EnumNicheCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NicheCategory | EnumNicheCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNicheCategoryFilter<$PrismaModel> | $Enums.NicheCategory
  }

  export type EnumContentToneFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentTone | EnumContentToneFieldRefInput<$PrismaModel>
    in?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    not?: NestedEnumContentToneFilter<$PrismaModel> | $Enums.ContentTone
  }

  export type EnumNarrationStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.NarrationStyle | EnumNarrationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumNarrationStyleFilter<$PrismaModel> | $Enums.NarrationStyle
  }

  export type ChannelProfileCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    niche?: SortOrder
    tone?: SortOrder
    narrationStyle?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    niche?: SortOrder
    tone?: SortOrder
    narrationStyle?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelProfileMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    niche?: SortOrder
    tone?: SortOrder
    narrationStyle?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type EnumNicheCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NicheCategory | EnumNicheCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNicheCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NicheCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNicheCategoryFilter<$PrismaModel>
    _max?: NestedEnumNicheCategoryFilter<$PrismaModel>
  }

  export type EnumContentToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentTone | EnumContentToneFieldRefInput<$PrismaModel>
    in?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    not?: NestedEnumContentToneWithAggregatesFilter<$PrismaModel> | $Enums.ContentTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentToneFilter<$PrismaModel>
    _max?: NestedEnumContentToneFilter<$PrismaModel>
  }

  export type EnumNarrationStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NarrationStyle | EnumNarrationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumNarrationStyleWithAggregatesFilter<$PrismaModel> | $Enums.NarrationStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNarrationStyleFilter<$PrismaModel>
    _max?: NestedEnumNarrationStyleFilter<$PrismaModel>
  }

  export type EnumFormatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormatTypeFilter<$PrismaModel> | $Enums.FormatType
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChannelProfileScalarRelationFilter = {
    is?: ChannelProfileWhereInput
    isNot?: ChannelProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContentProjectCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    channelProfileId?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    niche?: SortOrder
    format?: SortOrder
    status?: SortOrder
    durationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentProjectAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type ContentProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    channelProfileId?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    niche?: SortOrder
    format?: SortOrder
    status?: SortOrder
    durationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentProjectMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    channelProfileId?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    niche?: SortOrder
    format?: SortOrder
    status?: SortOrder
    durationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentProjectSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type EnumFormatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormatTypeFilter<$PrismaModel>
    _max?: NestedEnumFormatTypeFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContentProjectScalarRelationFilter = {
    is?: ContentProjectWhereInput
    isNot?: ContentProjectWhereInput
  }

  export type TrendAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    keyword?: SortOrder
    data?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    keyword?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    keyword?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ScriptCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    blocks?: SortOrder
    wordCount?: SortOrder
    estimatedDurationSecs?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScriptAvgOrderByAggregateInput = {
    wordCount?: SortOrder
    estimatedDurationSecs?: SortOrder
    version?: SortOrder
  }

  export type ScriptMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    wordCount?: SortOrder
    estimatedDurationSecs?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScriptMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    wordCount?: SortOrder
    estimatedDurationSecs?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScriptSumOrderByAggregateInput = {
    wordCount?: SortOrder
    estimatedDurationSecs?: SortOrder
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTtsProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.TtsProvider | EnumTtsProviderFieldRefInput<$PrismaModel>
    in?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumTtsProviderFilter<$PrismaModel> | $Enums.TtsProvider
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type ScriptScalarRelationFilter = {
    is?: ScriptWhereInput
    isNot?: ScriptWhereInput
  }

  export type NarrationCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    scriptId?: SortOrder
    provider?: SortOrder
    voiceId?: SortOrder
    audioUrl?: SortOrder
    durationSecs?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NarrationAvgOrderByAggregateInput = {
    durationSecs?: SortOrder
  }

  export type NarrationMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    scriptId?: SortOrder
    provider?: SortOrder
    voiceId?: SortOrder
    audioUrl?: SortOrder
    durationSecs?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NarrationMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    scriptId?: SortOrder
    provider?: SortOrder
    voiceId?: SortOrder
    audioUrl?: SortOrder
    durationSecs?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NarrationSumOrderByAggregateInput = {
    durationSecs?: SortOrder
  }

  export type EnumTtsProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TtsProvider | EnumTtsProviderFieldRefInput<$PrismaModel>
    in?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumTtsProviderWithAggregatesFilter<$PrismaModel> | $Enums.TtsProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTtsProviderFilter<$PrismaModel>
    _max?: NestedEnumTtsProviderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MediaSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    url?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    prompt?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PublicationMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    thumbnailUrl?: SortOrder
    platform?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    platform?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    platform?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExportJobCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    assetType?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    assetType?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExportJobMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    assetType?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChannelProfileCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput> | ChannelProfileCreateWithoutOrganizationInput[] | ChannelProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutOrganizationInput | ChannelProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: ChannelProfileCreateManyOrganizationInputEnvelope
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
  }

  export type ContentProjectCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput> | ContentProjectCreateWithoutOrganizationInput[] | ContentProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutOrganizationInput | ContentProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContentProjectCreateManyOrganizationInputEnvelope
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
  }

  export type TrendAnalysisCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput> | TrendAnalysisCreateWithoutOrganizationInput[] | TrendAnalysisUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutOrganizationInput | TrendAnalysisCreateOrConnectWithoutOrganizationInput[]
    createMany?: TrendAnalysisCreateManyOrganizationInputEnvelope
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
  }

  export type ScriptCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput> | ScriptCreateWithoutOrganizationInput[] | ScriptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutOrganizationInput | ScriptCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScriptCreateManyOrganizationInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type NarrationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput> | NarrationCreateWithoutOrganizationInput[] | NarrationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutOrganizationInput | NarrationCreateOrConnectWithoutOrganizationInput[]
    createMany?: NarrationCreateManyOrganizationInputEnvelope
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
  }

  export type MediaSuggestionCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput> | MediaSuggestionCreateWithoutOrganizationInput[] | MediaSuggestionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutOrganizationInput | MediaSuggestionCreateOrConnectWithoutOrganizationInput[]
    createMany?: MediaSuggestionCreateManyOrganizationInputEnvelope
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
  }

  export type PublicationMetadataCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput> | PublicationMetadataCreateWithoutOrganizationInput[] | PublicationMetadataUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutOrganizationInput | PublicationMetadataCreateOrConnectWithoutOrganizationInput[]
    createMany?: PublicationMetadataCreateManyOrganizationInputEnvelope
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
  }

  export type ExportJobCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput> | ExportJobCreateWithoutOrganizationInput[] | ExportJobUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutOrganizationInput | ExportJobCreateOrConnectWithoutOrganizationInput[]
    createMany?: ExportJobCreateManyOrganizationInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput> | ChannelProfileCreateWithoutOrganizationInput[] | ChannelProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutOrganizationInput | ChannelProfileCreateOrConnectWithoutOrganizationInput[]
    createMany?: ChannelProfileCreateManyOrganizationInputEnvelope
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
  }

  export type ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput> | ContentProjectCreateWithoutOrganizationInput[] | ContentProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutOrganizationInput | ContentProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContentProjectCreateManyOrganizationInputEnvelope
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
  }

  export type TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput> | TrendAnalysisCreateWithoutOrganizationInput[] | TrendAnalysisUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutOrganizationInput | TrendAnalysisCreateOrConnectWithoutOrganizationInput[]
    createMany?: TrendAnalysisCreateManyOrganizationInputEnvelope
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput> | ScriptCreateWithoutOrganizationInput[] | ScriptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutOrganizationInput | ScriptCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScriptCreateManyOrganizationInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type NarrationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput> | NarrationCreateWithoutOrganizationInput[] | NarrationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutOrganizationInput | NarrationCreateOrConnectWithoutOrganizationInput[]
    createMany?: NarrationCreateManyOrganizationInputEnvelope
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
  }

  export type MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput> | MediaSuggestionCreateWithoutOrganizationInput[] | MediaSuggestionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutOrganizationInput | MediaSuggestionCreateOrConnectWithoutOrganizationInput[]
    createMany?: MediaSuggestionCreateManyOrganizationInputEnvelope
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
  }

  export type PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput> | PublicationMetadataCreateWithoutOrganizationInput[] | PublicationMetadataUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutOrganizationInput | PublicationMetadataCreateOrConnectWithoutOrganizationInput[]
    createMany?: PublicationMetadataCreateManyOrganizationInputEnvelope
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
  }

  export type ExportJobUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput> | ExportJobCreateWithoutOrganizationInput[] | ExportJobUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutOrganizationInput | ExportJobCreateOrConnectWithoutOrganizationInput[]
    createMany?: ExportJobCreateManyOrganizationInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChannelProfileUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput> | ChannelProfileCreateWithoutOrganizationInput[] | ChannelProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutOrganizationInput | ChannelProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: ChannelProfileUpsertWithWhereUniqueWithoutOrganizationInput | ChannelProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ChannelProfileCreateManyOrganizationInputEnvelope
    set?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    disconnect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    delete?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    update?: ChannelProfileUpdateWithWhereUniqueWithoutOrganizationInput | ChannelProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ChannelProfileUpdateManyWithWhereWithoutOrganizationInput | ChannelProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
  }

  export type ContentProjectUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput> | ContentProjectCreateWithoutOrganizationInput[] | ContentProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutOrganizationInput | ContentProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContentProjectUpsertWithWhereUniqueWithoutOrganizationInput | ContentProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContentProjectCreateManyOrganizationInputEnvelope
    set?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    disconnect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    delete?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    update?: ContentProjectUpdateWithWhereUniqueWithoutOrganizationInput | ContentProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContentProjectUpdateManyWithWhereWithoutOrganizationInput | ContentProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
  }

  export type TrendAnalysisUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput> | TrendAnalysisCreateWithoutOrganizationInput[] | TrendAnalysisUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutOrganizationInput | TrendAnalysisCreateOrConnectWithoutOrganizationInput[]
    upsert?: TrendAnalysisUpsertWithWhereUniqueWithoutOrganizationInput | TrendAnalysisUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TrendAnalysisCreateManyOrganizationInputEnvelope
    set?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    disconnect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    delete?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    update?: TrendAnalysisUpdateWithWhereUniqueWithoutOrganizationInput | TrendAnalysisUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TrendAnalysisUpdateManyWithWhereWithoutOrganizationInput | TrendAnalysisUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
  }

  export type ScriptUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput> | ScriptCreateWithoutOrganizationInput[] | ScriptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutOrganizationInput | ScriptCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutOrganizationInput | ScriptUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScriptCreateManyOrganizationInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutOrganizationInput | ScriptUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutOrganizationInput | ScriptUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type NarrationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput> | NarrationCreateWithoutOrganizationInput[] | NarrationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutOrganizationInput | NarrationCreateOrConnectWithoutOrganizationInput[]
    upsert?: NarrationUpsertWithWhereUniqueWithoutOrganizationInput | NarrationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: NarrationCreateManyOrganizationInputEnvelope
    set?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    disconnect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    delete?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    update?: NarrationUpdateWithWhereUniqueWithoutOrganizationInput | NarrationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: NarrationUpdateManyWithWhereWithoutOrganizationInput | NarrationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
  }

  export type MediaSuggestionUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput> | MediaSuggestionCreateWithoutOrganizationInput[] | MediaSuggestionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutOrganizationInput | MediaSuggestionCreateOrConnectWithoutOrganizationInput[]
    upsert?: MediaSuggestionUpsertWithWhereUniqueWithoutOrganizationInput | MediaSuggestionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MediaSuggestionCreateManyOrganizationInputEnvelope
    set?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    disconnect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    delete?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    update?: MediaSuggestionUpdateWithWhereUniqueWithoutOrganizationInput | MediaSuggestionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MediaSuggestionUpdateManyWithWhereWithoutOrganizationInput | MediaSuggestionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
  }

  export type PublicationMetadataUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput> | PublicationMetadataCreateWithoutOrganizationInput[] | PublicationMetadataUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutOrganizationInput | PublicationMetadataCreateOrConnectWithoutOrganizationInput[]
    upsert?: PublicationMetadataUpsertWithWhereUniqueWithoutOrganizationInput | PublicationMetadataUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PublicationMetadataCreateManyOrganizationInputEnvelope
    set?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    disconnect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    delete?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    update?: PublicationMetadataUpdateWithWhereUniqueWithoutOrganizationInput | PublicationMetadataUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PublicationMetadataUpdateManyWithWhereWithoutOrganizationInput | PublicationMetadataUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
  }

  export type ExportJobUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput> | ExportJobCreateWithoutOrganizationInput[] | ExportJobUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutOrganizationInput | ExportJobCreateOrConnectWithoutOrganizationInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutOrganizationInput | ExportJobUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ExportJobCreateManyOrganizationInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutOrganizationInput | ExportJobUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutOrganizationInput | ExportJobUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput> | ChannelProfileCreateWithoutOrganizationInput[] | ChannelProfileUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutOrganizationInput | ChannelProfileCreateOrConnectWithoutOrganizationInput[]
    upsert?: ChannelProfileUpsertWithWhereUniqueWithoutOrganizationInput | ChannelProfileUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ChannelProfileCreateManyOrganizationInputEnvelope
    set?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    disconnect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    delete?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    update?: ChannelProfileUpdateWithWhereUniqueWithoutOrganizationInput | ChannelProfileUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ChannelProfileUpdateManyWithWhereWithoutOrganizationInput | ChannelProfileUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
  }

  export type ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput> | ContentProjectCreateWithoutOrganizationInput[] | ContentProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutOrganizationInput | ContentProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContentProjectUpsertWithWhereUniqueWithoutOrganizationInput | ContentProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContentProjectCreateManyOrganizationInputEnvelope
    set?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    disconnect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    delete?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    update?: ContentProjectUpdateWithWhereUniqueWithoutOrganizationInput | ContentProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContentProjectUpdateManyWithWhereWithoutOrganizationInput | ContentProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
  }

  export type TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput> | TrendAnalysisCreateWithoutOrganizationInput[] | TrendAnalysisUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutOrganizationInput | TrendAnalysisCreateOrConnectWithoutOrganizationInput[]
    upsert?: TrendAnalysisUpsertWithWhereUniqueWithoutOrganizationInput | TrendAnalysisUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TrendAnalysisCreateManyOrganizationInputEnvelope
    set?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    disconnect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    delete?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    update?: TrendAnalysisUpdateWithWhereUniqueWithoutOrganizationInput | TrendAnalysisUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TrendAnalysisUpdateManyWithWhereWithoutOrganizationInput | TrendAnalysisUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput> | ScriptCreateWithoutOrganizationInput[] | ScriptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutOrganizationInput | ScriptCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutOrganizationInput | ScriptUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScriptCreateManyOrganizationInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutOrganizationInput | ScriptUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutOrganizationInput | ScriptUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type NarrationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput> | NarrationCreateWithoutOrganizationInput[] | NarrationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutOrganizationInput | NarrationCreateOrConnectWithoutOrganizationInput[]
    upsert?: NarrationUpsertWithWhereUniqueWithoutOrganizationInput | NarrationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: NarrationCreateManyOrganizationInputEnvelope
    set?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    disconnect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    delete?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    update?: NarrationUpdateWithWhereUniqueWithoutOrganizationInput | NarrationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: NarrationUpdateManyWithWhereWithoutOrganizationInput | NarrationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
  }

  export type MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput> | MediaSuggestionCreateWithoutOrganizationInput[] | MediaSuggestionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutOrganizationInput | MediaSuggestionCreateOrConnectWithoutOrganizationInput[]
    upsert?: MediaSuggestionUpsertWithWhereUniqueWithoutOrganizationInput | MediaSuggestionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MediaSuggestionCreateManyOrganizationInputEnvelope
    set?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    disconnect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    delete?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    update?: MediaSuggestionUpdateWithWhereUniqueWithoutOrganizationInput | MediaSuggestionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MediaSuggestionUpdateManyWithWhereWithoutOrganizationInput | MediaSuggestionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
  }

  export type PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput> | PublicationMetadataCreateWithoutOrganizationInput[] | PublicationMetadataUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutOrganizationInput | PublicationMetadataCreateOrConnectWithoutOrganizationInput[]
    upsert?: PublicationMetadataUpsertWithWhereUniqueWithoutOrganizationInput | PublicationMetadataUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PublicationMetadataCreateManyOrganizationInputEnvelope
    set?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    disconnect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    delete?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    update?: PublicationMetadataUpdateWithWhereUniqueWithoutOrganizationInput | PublicationMetadataUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PublicationMetadataUpdateManyWithWhereWithoutOrganizationInput | PublicationMetadataUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
  }

  export type ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput> | ExportJobCreateWithoutOrganizationInput[] | ExportJobUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutOrganizationInput | ExportJobCreateOrConnectWithoutOrganizationInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutOrganizationInput | ExportJobUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ExportJobCreateManyOrganizationInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutOrganizationInput | ExportJobUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutOrganizationInput | ExportJobUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ChannelProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput> | ChannelProfileCreateWithoutUserInput[] | ChannelProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutUserInput | ChannelProfileCreateOrConnectWithoutUserInput[]
    createMany?: ChannelProfileCreateManyUserInputEnvelope
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ChannelProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput> | ChannelProfileCreateWithoutUserInput[] | ChannelProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutUserInput | ChannelProfileCreateOrConnectWithoutUserInput[]
    createMany?: ChannelProfileCreateManyUserInputEnvelope
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type ChannelProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput> | ChannelProfileCreateWithoutUserInput[] | ChannelProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutUserInput | ChannelProfileCreateOrConnectWithoutUserInput[]
    upsert?: ChannelProfileUpsertWithWhereUniqueWithoutUserInput | ChannelProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelProfileCreateManyUserInputEnvelope
    set?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    disconnect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    delete?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    update?: ChannelProfileUpdateWithWhereUniqueWithoutUserInput | ChannelProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelProfileUpdateManyWithWhereWithoutUserInput | ChannelProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ChannelProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput> | ChannelProfileCreateWithoutUserInput[] | ChannelProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutUserInput | ChannelProfileCreateOrConnectWithoutUserInput[]
    upsert?: ChannelProfileUpsertWithWhereUniqueWithoutUserInput | ChannelProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelProfileCreateManyUserInputEnvelope
    set?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    disconnect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    delete?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    connect?: ChannelProfileWhereUniqueInput | ChannelProfileWhereUniqueInput[]
    update?: ChannelProfileUpdateWithWhereUniqueWithoutUserInput | ChannelProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelProfileUpdateManyWithWhereWithoutUserInput | ChannelProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type OrganizationCreateNestedOneWithoutChannelProfilesInput = {
    create?: XOR<OrganizationCreateWithoutChannelProfilesInput, OrganizationUncheckedCreateWithoutChannelProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChannelProfilesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChannelProfilesInput = {
    create?: XOR<UserCreateWithoutChannelProfilesInput, UserUncheckedCreateWithoutChannelProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentProjectCreateNestedManyWithoutChannelProfileInput = {
    create?: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput> | ContentProjectCreateWithoutChannelProfileInput[] | ContentProjectUncheckedCreateWithoutChannelProfileInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutChannelProfileInput | ContentProjectCreateOrConnectWithoutChannelProfileInput[]
    createMany?: ContentProjectCreateManyChannelProfileInputEnvelope
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
  }

  export type ContentProjectUncheckedCreateNestedManyWithoutChannelProfileInput = {
    create?: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput> | ContentProjectCreateWithoutChannelProfileInput[] | ContentProjectUncheckedCreateWithoutChannelProfileInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutChannelProfileInput | ContentProjectCreateOrConnectWithoutChannelProfileInput[]
    createMany?: ContentProjectCreateManyChannelProfileInputEnvelope
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type EnumNicheCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NicheCategory
  }

  export type EnumContentToneFieldUpdateOperationsInput = {
    set?: $Enums.ContentTone
  }

  export type EnumNarrationStyleFieldUpdateOperationsInput = {
    set?: $Enums.NarrationStyle
  }

  export type OrganizationUpdateOneRequiredWithoutChannelProfilesNestedInput = {
    create?: XOR<OrganizationCreateWithoutChannelProfilesInput, OrganizationUncheckedCreateWithoutChannelProfilesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChannelProfilesInput
    upsert?: OrganizationUpsertWithoutChannelProfilesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutChannelProfilesInput, OrganizationUpdateWithoutChannelProfilesInput>, OrganizationUncheckedUpdateWithoutChannelProfilesInput>
  }

  export type UserUpdateOneRequiredWithoutChannelProfilesNestedInput = {
    create?: XOR<UserCreateWithoutChannelProfilesInput, UserUncheckedCreateWithoutChannelProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelProfilesInput
    upsert?: UserUpsertWithoutChannelProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelProfilesInput, UserUpdateWithoutChannelProfilesInput>, UserUncheckedUpdateWithoutChannelProfilesInput>
  }

  export type ContentProjectUpdateManyWithoutChannelProfileNestedInput = {
    create?: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput> | ContentProjectCreateWithoutChannelProfileInput[] | ContentProjectUncheckedCreateWithoutChannelProfileInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutChannelProfileInput | ContentProjectCreateOrConnectWithoutChannelProfileInput[]
    upsert?: ContentProjectUpsertWithWhereUniqueWithoutChannelProfileInput | ContentProjectUpsertWithWhereUniqueWithoutChannelProfileInput[]
    createMany?: ContentProjectCreateManyChannelProfileInputEnvelope
    set?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    disconnect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    delete?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    update?: ContentProjectUpdateWithWhereUniqueWithoutChannelProfileInput | ContentProjectUpdateWithWhereUniqueWithoutChannelProfileInput[]
    updateMany?: ContentProjectUpdateManyWithWhereWithoutChannelProfileInput | ContentProjectUpdateManyWithWhereWithoutChannelProfileInput[]
    deleteMany?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
  }

  export type ContentProjectUncheckedUpdateManyWithoutChannelProfileNestedInput = {
    create?: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput> | ContentProjectCreateWithoutChannelProfileInput[] | ContentProjectUncheckedCreateWithoutChannelProfileInput[]
    connectOrCreate?: ContentProjectCreateOrConnectWithoutChannelProfileInput | ContentProjectCreateOrConnectWithoutChannelProfileInput[]
    upsert?: ContentProjectUpsertWithWhereUniqueWithoutChannelProfileInput | ContentProjectUpsertWithWhereUniqueWithoutChannelProfileInput[]
    createMany?: ContentProjectCreateManyChannelProfileInputEnvelope
    set?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    disconnect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    delete?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    connect?: ContentProjectWhereUniqueInput | ContentProjectWhereUniqueInput[]
    update?: ContentProjectUpdateWithWhereUniqueWithoutChannelProfileInput | ContentProjectUpdateWithWhereUniqueWithoutChannelProfileInput[]
    updateMany?: ContentProjectUpdateManyWithWhereWithoutChannelProfileInput | ContentProjectUpdateManyWithWhereWithoutChannelProfileInput[]
    deleteMany?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutContentProjectsInput = {
    create?: XOR<OrganizationCreateWithoutContentProjectsInput, OrganizationUncheckedCreateWithoutContentProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContentProjectsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ChannelProfileCreateNestedOneWithoutContentProjectsInput = {
    create?: XOR<ChannelProfileCreateWithoutContentProjectsInput, ChannelProfileUncheckedCreateWithoutContentProjectsInput>
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutContentProjectsInput
    connect?: ChannelProfileWhereUniqueInput
  }

  export type TrendAnalysisCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput> | TrendAnalysisCreateWithoutContentProjectInput[] | TrendAnalysisUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutContentProjectInput | TrendAnalysisCreateOrConnectWithoutContentProjectInput[]
    createMany?: TrendAnalysisCreateManyContentProjectInputEnvelope
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
  }

  export type ScriptCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput> | ScriptCreateWithoutContentProjectInput[] | ScriptUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutContentProjectInput | ScriptCreateOrConnectWithoutContentProjectInput[]
    createMany?: ScriptCreateManyContentProjectInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type MediaSuggestionCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput> | MediaSuggestionCreateWithoutContentProjectInput[] | MediaSuggestionUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutContentProjectInput | MediaSuggestionCreateOrConnectWithoutContentProjectInput[]
    createMany?: MediaSuggestionCreateManyContentProjectInputEnvelope
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
  }

  export type PublicationMetadataCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput> | PublicationMetadataCreateWithoutContentProjectInput[] | PublicationMetadataUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutContentProjectInput | PublicationMetadataCreateOrConnectWithoutContentProjectInput[]
    createMany?: PublicationMetadataCreateManyContentProjectInputEnvelope
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
  }

  export type ExportJobCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput> | ExportJobCreateWithoutContentProjectInput[] | ExportJobUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutContentProjectInput | ExportJobCreateOrConnectWithoutContentProjectInput[]
    createMany?: ExportJobCreateManyContentProjectInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput> | TrendAnalysisCreateWithoutContentProjectInput[] | TrendAnalysisUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutContentProjectInput | TrendAnalysisCreateOrConnectWithoutContentProjectInput[]
    createMany?: TrendAnalysisCreateManyContentProjectInputEnvelope
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
  }

  export type ScriptUncheckedCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput> | ScriptCreateWithoutContentProjectInput[] | ScriptUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutContentProjectInput | ScriptCreateOrConnectWithoutContentProjectInput[]
    createMany?: ScriptCreateManyContentProjectInputEnvelope
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
  }

  export type MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput> | MediaSuggestionCreateWithoutContentProjectInput[] | MediaSuggestionUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutContentProjectInput | MediaSuggestionCreateOrConnectWithoutContentProjectInput[]
    createMany?: MediaSuggestionCreateManyContentProjectInputEnvelope
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
  }

  export type PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput> | PublicationMetadataCreateWithoutContentProjectInput[] | PublicationMetadataUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutContentProjectInput | PublicationMetadataCreateOrConnectWithoutContentProjectInput[]
    createMany?: PublicationMetadataCreateManyContentProjectInputEnvelope
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
  }

  export type ExportJobUncheckedCreateNestedManyWithoutContentProjectInput = {
    create?: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput> | ExportJobCreateWithoutContentProjectInput[] | ExportJobUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutContentProjectInput | ExportJobCreateOrConnectWithoutContentProjectInput[]
    createMany?: ExportJobCreateManyContentProjectInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type EnumFormatTypeFieldUpdateOperationsInput = {
    set?: $Enums.FormatType
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput = {
    create?: XOR<OrganizationCreateWithoutContentProjectsInput, OrganizationUncheckedCreateWithoutContentProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContentProjectsInput
    upsert?: OrganizationUpsertWithoutContentProjectsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutContentProjectsInput, OrganizationUpdateWithoutContentProjectsInput>, OrganizationUncheckedUpdateWithoutContentProjectsInput>
  }

  export type ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput = {
    create?: XOR<ChannelProfileCreateWithoutContentProjectsInput, ChannelProfileUncheckedCreateWithoutContentProjectsInput>
    connectOrCreate?: ChannelProfileCreateOrConnectWithoutContentProjectsInput
    upsert?: ChannelProfileUpsertWithoutContentProjectsInput
    connect?: ChannelProfileWhereUniqueInput
    update?: XOR<XOR<ChannelProfileUpdateToOneWithWhereWithoutContentProjectsInput, ChannelProfileUpdateWithoutContentProjectsInput>, ChannelProfileUncheckedUpdateWithoutContentProjectsInput>
  }

  export type TrendAnalysisUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput> | TrendAnalysisCreateWithoutContentProjectInput[] | TrendAnalysisUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutContentProjectInput | TrendAnalysisCreateOrConnectWithoutContentProjectInput[]
    upsert?: TrendAnalysisUpsertWithWhereUniqueWithoutContentProjectInput | TrendAnalysisUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: TrendAnalysisCreateManyContentProjectInputEnvelope
    set?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    disconnect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    delete?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    update?: TrendAnalysisUpdateWithWhereUniqueWithoutContentProjectInput | TrendAnalysisUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: TrendAnalysisUpdateManyWithWhereWithoutContentProjectInput | TrendAnalysisUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
  }

  export type ScriptUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput> | ScriptCreateWithoutContentProjectInput[] | ScriptUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutContentProjectInput | ScriptCreateOrConnectWithoutContentProjectInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutContentProjectInput | ScriptUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: ScriptCreateManyContentProjectInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutContentProjectInput | ScriptUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutContentProjectInput | ScriptUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type MediaSuggestionUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput> | MediaSuggestionCreateWithoutContentProjectInput[] | MediaSuggestionUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutContentProjectInput | MediaSuggestionCreateOrConnectWithoutContentProjectInput[]
    upsert?: MediaSuggestionUpsertWithWhereUniqueWithoutContentProjectInput | MediaSuggestionUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: MediaSuggestionCreateManyContentProjectInputEnvelope
    set?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    disconnect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    delete?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    update?: MediaSuggestionUpdateWithWhereUniqueWithoutContentProjectInput | MediaSuggestionUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: MediaSuggestionUpdateManyWithWhereWithoutContentProjectInput | MediaSuggestionUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
  }

  export type PublicationMetadataUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput> | PublicationMetadataCreateWithoutContentProjectInput[] | PublicationMetadataUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutContentProjectInput | PublicationMetadataCreateOrConnectWithoutContentProjectInput[]
    upsert?: PublicationMetadataUpsertWithWhereUniqueWithoutContentProjectInput | PublicationMetadataUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: PublicationMetadataCreateManyContentProjectInputEnvelope
    set?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    disconnect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    delete?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    update?: PublicationMetadataUpdateWithWhereUniqueWithoutContentProjectInput | PublicationMetadataUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: PublicationMetadataUpdateManyWithWhereWithoutContentProjectInput | PublicationMetadataUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
  }

  export type ExportJobUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput> | ExportJobCreateWithoutContentProjectInput[] | ExportJobUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutContentProjectInput | ExportJobCreateOrConnectWithoutContentProjectInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutContentProjectInput | ExportJobUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: ExportJobCreateManyContentProjectInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutContentProjectInput | ExportJobUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutContentProjectInput | ExportJobUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput> | TrendAnalysisCreateWithoutContentProjectInput[] | TrendAnalysisUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: TrendAnalysisCreateOrConnectWithoutContentProjectInput | TrendAnalysisCreateOrConnectWithoutContentProjectInput[]
    upsert?: TrendAnalysisUpsertWithWhereUniqueWithoutContentProjectInput | TrendAnalysisUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: TrendAnalysisCreateManyContentProjectInputEnvelope
    set?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    disconnect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    delete?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    connect?: TrendAnalysisWhereUniqueInput | TrendAnalysisWhereUniqueInput[]
    update?: TrendAnalysisUpdateWithWhereUniqueWithoutContentProjectInput | TrendAnalysisUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: TrendAnalysisUpdateManyWithWhereWithoutContentProjectInput | TrendAnalysisUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
  }

  export type ScriptUncheckedUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput> | ScriptCreateWithoutContentProjectInput[] | ScriptUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ScriptCreateOrConnectWithoutContentProjectInput | ScriptCreateOrConnectWithoutContentProjectInput[]
    upsert?: ScriptUpsertWithWhereUniqueWithoutContentProjectInput | ScriptUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: ScriptCreateManyContentProjectInputEnvelope
    set?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    disconnect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    delete?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    connect?: ScriptWhereUniqueInput | ScriptWhereUniqueInput[]
    update?: ScriptUpdateWithWhereUniqueWithoutContentProjectInput | ScriptUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: ScriptUpdateManyWithWhereWithoutContentProjectInput | ScriptUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
  }

  export type MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput> | MediaSuggestionCreateWithoutContentProjectInput[] | MediaSuggestionUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: MediaSuggestionCreateOrConnectWithoutContentProjectInput | MediaSuggestionCreateOrConnectWithoutContentProjectInput[]
    upsert?: MediaSuggestionUpsertWithWhereUniqueWithoutContentProjectInput | MediaSuggestionUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: MediaSuggestionCreateManyContentProjectInputEnvelope
    set?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    disconnect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    delete?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    connect?: MediaSuggestionWhereUniqueInput | MediaSuggestionWhereUniqueInput[]
    update?: MediaSuggestionUpdateWithWhereUniqueWithoutContentProjectInput | MediaSuggestionUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: MediaSuggestionUpdateManyWithWhereWithoutContentProjectInput | MediaSuggestionUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
  }

  export type PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput> | PublicationMetadataCreateWithoutContentProjectInput[] | PublicationMetadataUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: PublicationMetadataCreateOrConnectWithoutContentProjectInput | PublicationMetadataCreateOrConnectWithoutContentProjectInput[]
    upsert?: PublicationMetadataUpsertWithWhereUniqueWithoutContentProjectInput | PublicationMetadataUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: PublicationMetadataCreateManyContentProjectInputEnvelope
    set?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    disconnect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    delete?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    connect?: PublicationMetadataWhereUniqueInput | PublicationMetadataWhereUniqueInput[]
    update?: PublicationMetadataUpdateWithWhereUniqueWithoutContentProjectInput | PublicationMetadataUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: PublicationMetadataUpdateManyWithWhereWithoutContentProjectInput | PublicationMetadataUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
  }

  export type ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput = {
    create?: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput> | ExportJobCreateWithoutContentProjectInput[] | ExportJobUncheckedCreateWithoutContentProjectInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutContentProjectInput | ExportJobCreateOrConnectWithoutContentProjectInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutContentProjectInput | ExportJobUpsertWithWhereUniqueWithoutContentProjectInput[]
    createMany?: ExportJobCreateManyContentProjectInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutContentProjectInput | ExportJobUpdateWithWhereUniqueWithoutContentProjectInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutContentProjectInput | ExportJobUpdateManyWithWhereWithoutContentProjectInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutTrendAnalysesInput = {
    create?: XOR<OrganizationCreateWithoutTrendAnalysesInput, OrganizationUncheckedCreateWithoutTrendAnalysesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTrendAnalysesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContentProjectCreateNestedOneWithoutTrendAnalysesInput = {
    create?: XOR<ContentProjectCreateWithoutTrendAnalysesInput, ContentProjectUncheckedCreateWithoutTrendAnalysesInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutTrendAnalysesInput
    connect?: ContentProjectWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutTrendAnalysesNestedInput = {
    create?: XOR<OrganizationCreateWithoutTrendAnalysesInput, OrganizationUncheckedCreateWithoutTrendAnalysesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTrendAnalysesInput
    upsert?: OrganizationUpsertWithoutTrendAnalysesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTrendAnalysesInput, OrganizationUpdateWithoutTrendAnalysesInput>, OrganizationUncheckedUpdateWithoutTrendAnalysesInput>
  }

  export type ContentProjectUpdateOneRequiredWithoutTrendAnalysesNestedInput = {
    create?: XOR<ContentProjectCreateWithoutTrendAnalysesInput, ContentProjectUncheckedCreateWithoutTrendAnalysesInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutTrendAnalysesInput
    upsert?: ContentProjectUpsertWithoutTrendAnalysesInput
    connect?: ContentProjectWhereUniqueInput
    update?: XOR<XOR<ContentProjectUpdateToOneWithWhereWithoutTrendAnalysesInput, ContentProjectUpdateWithoutTrendAnalysesInput>, ContentProjectUncheckedUpdateWithoutTrendAnalysesInput>
  }

  export type OrganizationCreateNestedOneWithoutScriptsInput = {
    create?: XOR<OrganizationCreateWithoutScriptsInput, OrganizationUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutScriptsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContentProjectCreateNestedOneWithoutScriptsInput = {
    create?: XOR<ContentProjectCreateWithoutScriptsInput, ContentProjectUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutScriptsInput
    connect?: ContentProjectWhereUniqueInput
  }

  export type NarrationCreateNestedManyWithoutScriptInput = {
    create?: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput> | NarrationCreateWithoutScriptInput[] | NarrationUncheckedCreateWithoutScriptInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutScriptInput | NarrationCreateOrConnectWithoutScriptInput[]
    createMany?: NarrationCreateManyScriptInputEnvelope
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
  }

  export type NarrationUncheckedCreateNestedManyWithoutScriptInput = {
    create?: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput> | NarrationCreateWithoutScriptInput[] | NarrationUncheckedCreateWithoutScriptInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutScriptInput | NarrationCreateOrConnectWithoutScriptInput[]
    createMany?: NarrationCreateManyScriptInputEnvelope
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutScriptsNestedInput = {
    create?: XOR<OrganizationCreateWithoutScriptsInput, OrganizationUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutScriptsInput
    upsert?: OrganizationUpsertWithoutScriptsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutScriptsInput, OrganizationUpdateWithoutScriptsInput>, OrganizationUncheckedUpdateWithoutScriptsInput>
  }

  export type ContentProjectUpdateOneRequiredWithoutScriptsNestedInput = {
    create?: XOR<ContentProjectCreateWithoutScriptsInput, ContentProjectUncheckedCreateWithoutScriptsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutScriptsInput
    upsert?: ContentProjectUpsertWithoutScriptsInput
    connect?: ContentProjectWhereUniqueInput
    update?: XOR<XOR<ContentProjectUpdateToOneWithWhereWithoutScriptsInput, ContentProjectUpdateWithoutScriptsInput>, ContentProjectUncheckedUpdateWithoutScriptsInput>
  }

  export type NarrationUpdateManyWithoutScriptNestedInput = {
    create?: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput> | NarrationCreateWithoutScriptInput[] | NarrationUncheckedCreateWithoutScriptInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutScriptInput | NarrationCreateOrConnectWithoutScriptInput[]
    upsert?: NarrationUpsertWithWhereUniqueWithoutScriptInput | NarrationUpsertWithWhereUniqueWithoutScriptInput[]
    createMany?: NarrationCreateManyScriptInputEnvelope
    set?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    disconnect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    delete?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    update?: NarrationUpdateWithWhereUniqueWithoutScriptInput | NarrationUpdateWithWhereUniqueWithoutScriptInput[]
    updateMany?: NarrationUpdateManyWithWhereWithoutScriptInput | NarrationUpdateManyWithWhereWithoutScriptInput[]
    deleteMany?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
  }

  export type NarrationUncheckedUpdateManyWithoutScriptNestedInput = {
    create?: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput> | NarrationCreateWithoutScriptInput[] | NarrationUncheckedCreateWithoutScriptInput[]
    connectOrCreate?: NarrationCreateOrConnectWithoutScriptInput | NarrationCreateOrConnectWithoutScriptInput[]
    upsert?: NarrationUpsertWithWhereUniqueWithoutScriptInput | NarrationUpsertWithWhereUniqueWithoutScriptInput[]
    createMany?: NarrationCreateManyScriptInputEnvelope
    set?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    disconnect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    delete?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    connect?: NarrationWhereUniqueInput | NarrationWhereUniqueInput[]
    update?: NarrationUpdateWithWhereUniqueWithoutScriptInput | NarrationUpdateWithWhereUniqueWithoutScriptInput[]
    updateMany?: NarrationUpdateManyWithWhereWithoutScriptInput | NarrationUpdateManyWithWhereWithoutScriptInput[]
    deleteMany?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutNarrationsInput = {
    create?: XOR<OrganizationCreateWithoutNarrationsInput, OrganizationUncheckedCreateWithoutNarrationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutNarrationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScriptCreateNestedOneWithoutNarrationsInput = {
    create?: XOR<ScriptCreateWithoutNarrationsInput, ScriptUncheckedCreateWithoutNarrationsInput>
    connectOrCreate?: ScriptCreateOrConnectWithoutNarrationsInput
    connect?: ScriptWhereUniqueInput
  }

  export type EnumTtsProviderFieldUpdateOperationsInput = {
    set?: $Enums.TtsProvider
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type OrganizationUpdateOneRequiredWithoutNarrationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutNarrationsInput, OrganizationUncheckedCreateWithoutNarrationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutNarrationsInput
    upsert?: OrganizationUpsertWithoutNarrationsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutNarrationsInput, OrganizationUpdateWithoutNarrationsInput>, OrganizationUncheckedUpdateWithoutNarrationsInput>
  }

  export type ScriptUpdateOneRequiredWithoutNarrationsNestedInput = {
    create?: XOR<ScriptCreateWithoutNarrationsInput, ScriptUncheckedCreateWithoutNarrationsInput>
    connectOrCreate?: ScriptCreateOrConnectWithoutNarrationsInput
    upsert?: ScriptUpsertWithoutNarrationsInput
    connect?: ScriptWhereUniqueInput
    update?: XOR<XOR<ScriptUpdateToOneWithWhereWithoutNarrationsInput, ScriptUpdateWithoutNarrationsInput>, ScriptUncheckedUpdateWithoutNarrationsInput>
  }

  export type OrganizationCreateNestedOneWithoutMediaSuggestionsInput = {
    create?: XOR<OrganizationCreateWithoutMediaSuggestionsInput, OrganizationUncheckedCreateWithoutMediaSuggestionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMediaSuggestionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContentProjectCreateNestedOneWithoutMediaSuggestionsInput = {
    create?: XOR<ContentProjectCreateWithoutMediaSuggestionsInput, ContentProjectUncheckedCreateWithoutMediaSuggestionsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutMediaSuggestionsInput
    connect?: ContentProjectWhereUniqueInput
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type OrganizationUpdateOneRequiredWithoutMediaSuggestionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMediaSuggestionsInput, OrganizationUncheckedCreateWithoutMediaSuggestionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMediaSuggestionsInput
    upsert?: OrganizationUpsertWithoutMediaSuggestionsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMediaSuggestionsInput, OrganizationUpdateWithoutMediaSuggestionsInput>, OrganizationUncheckedUpdateWithoutMediaSuggestionsInput>
  }

  export type ContentProjectUpdateOneRequiredWithoutMediaSuggestionsNestedInput = {
    create?: XOR<ContentProjectCreateWithoutMediaSuggestionsInput, ContentProjectUncheckedCreateWithoutMediaSuggestionsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutMediaSuggestionsInput
    upsert?: ContentProjectUpsertWithoutMediaSuggestionsInput
    connect?: ContentProjectWhereUniqueInput
    update?: XOR<XOR<ContentProjectUpdateToOneWithWhereWithoutMediaSuggestionsInput, ContentProjectUpdateWithoutMediaSuggestionsInput>, ContentProjectUncheckedUpdateWithoutMediaSuggestionsInput>
  }

  export type PublicationMetadataCreatetagsInput = {
    set: string[]
  }

  export type OrganizationCreateNestedOneWithoutPublicationMetadataInput = {
    create?: XOR<OrganizationCreateWithoutPublicationMetadataInput, OrganizationUncheckedCreateWithoutPublicationMetadataInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPublicationMetadataInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContentProjectCreateNestedOneWithoutPublicationMetadataInput = {
    create?: XOR<ContentProjectCreateWithoutPublicationMetadataInput, ContentProjectUncheckedCreateWithoutPublicationMetadataInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutPublicationMetadataInput
    connect?: ContentProjectWhereUniqueInput
  }

  export type PublicationMetadataUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutPublicationMetadataNestedInput = {
    create?: XOR<OrganizationCreateWithoutPublicationMetadataInput, OrganizationUncheckedCreateWithoutPublicationMetadataInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPublicationMetadataInput
    upsert?: OrganizationUpsertWithoutPublicationMetadataInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPublicationMetadataInput, OrganizationUpdateWithoutPublicationMetadataInput>, OrganizationUncheckedUpdateWithoutPublicationMetadataInput>
  }

  export type ContentProjectUpdateOneRequiredWithoutPublicationMetadataNestedInput = {
    create?: XOR<ContentProjectCreateWithoutPublicationMetadataInput, ContentProjectUncheckedCreateWithoutPublicationMetadataInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutPublicationMetadataInput
    upsert?: ContentProjectUpsertWithoutPublicationMetadataInput
    connect?: ContentProjectWhereUniqueInput
    update?: XOR<XOR<ContentProjectUpdateToOneWithWhereWithoutPublicationMetadataInput, ContentProjectUpdateWithoutPublicationMetadataInput>, ContentProjectUncheckedUpdateWithoutPublicationMetadataInput>
  }

  export type OrganizationCreateNestedOneWithoutExportJobsInput = {
    create?: XOR<OrganizationCreateWithoutExportJobsInput, OrganizationUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExportJobsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContentProjectCreateNestedOneWithoutExportJobsInput = {
    create?: XOR<ContentProjectCreateWithoutExportJobsInput, ContentProjectUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutExportJobsInput
    connect?: ContentProjectWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutExportJobsNestedInput = {
    create?: XOR<OrganizationCreateWithoutExportJobsInput, OrganizationUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExportJobsInput
    upsert?: OrganizationUpsertWithoutExportJobsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutExportJobsInput, OrganizationUpdateWithoutExportJobsInput>, OrganizationUncheckedUpdateWithoutExportJobsInput>
  }

  export type ContentProjectUpdateOneRequiredWithoutExportJobsNestedInput = {
    create?: XOR<ContentProjectCreateWithoutExportJobsInput, ContentProjectUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: ContentProjectCreateOrConnectWithoutExportJobsInput
    upsert?: ContentProjectUpsertWithoutExportJobsInput
    connect?: ContentProjectWhereUniqueInput
    update?: XOR<XOR<ContentProjectUpdateToOneWithWhereWithoutExportJobsInput, ContentProjectUpdateWithoutExportJobsInput>, ContentProjectUncheckedUpdateWithoutExportJobsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumNicheCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NicheCategory | EnumNicheCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNicheCategoryFilter<$PrismaModel> | $Enums.NicheCategory
  }

  export type NestedEnumContentToneFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentTone | EnumContentToneFieldRefInput<$PrismaModel>
    in?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    not?: NestedEnumContentToneFilter<$PrismaModel> | $Enums.ContentTone
  }

  export type NestedEnumNarrationStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.NarrationStyle | EnumNarrationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumNarrationStyleFilter<$PrismaModel> | $Enums.NarrationStyle
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedEnumNicheCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NicheCategory | EnumNicheCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NicheCategory[] | ListEnumNicheCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNicheCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NicheCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNicheCategoryFilter<$PrismaModel>
    _max?: NestedEnumNicheCategoryFilter<$PrismaModel>
  }

  export type NestedEnumContentToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentTone | EnumContentToneFieldRefInput<$PrismaModel>
    in?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentTone[] | ListEnumContentToneFieldRefInput<$PrismaModel>
    not?: NestedEnumContentToneWithAggregatesFilter<$PrismaModel> | $Enums.ContentTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentToneFilter<$PrismaModel>
    _max?: NestedEnumContentToneFilter<$PrismaModel>
  }

  export type NestedEnumNarrationStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NarrationStyle | EnumNarrationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.NarrationStyle[] | ListEnumNarrationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumNarrationStyleWithAggregatesFilter<$PrismaModel> | $Enums.NarrationStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNarrationStyleFilter<$PrismaModel>
    _max?: NestedEnumNarrationStyleFilter<$PrismaModel>
  }

  export type NestedEnumFormatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormatTypeFilter<$PrismaModel> | $Enums.FormatType
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormatType[] | ListEnumFormatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormatTypeFilter<$PrismaModel>
    _max?: NestedEnumFormatTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTtsProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.TtsProvider | EnumTtsProviderFieldRefInput<$PrismaModel>
    in?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumTtsProviderFilter<$PrismaModel> | $Enums.TtsProvider
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumTtsProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TtsProvider | EnumTtsProviderFieldRefInput<$PrismaModel>
    in?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.TtsProvider[] | ListEnumTtsProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumTtsProviderWithAggregatesFilter<$PrismaModel> | $Enums.TtsProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTtsProviderFilter<$PrismaModel>
    _max?: NestedEnumTtsProviderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ChannelProfileCreateWithoutOrganizationInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChannelProfilesInput
    contentProjects?: ContentProjectCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileCreateOrConnectWithoutOrganizationInput = {
    where: ChannelProfileWhereUniqueInput
    create: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type ChannelProfileCreateManyOrganizationInputEnvelope = {
    data: ChannelProfileCreateManyOrganizationInput | ChannelProfileCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ContentProjectCreateWithoutOrganizationInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutOrganizationInput = {
    id?: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutOrganizationInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ContentProjectCreateManyOrganizationInputEnvelope = {
    data: ContentProjectCreateManyOrganizationInput | ContentProjectCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TrendAnalysisCreateWithoutOrganizationInput = {
    id?: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
    contentProject: ContentProjectCreateNestedOneWithoutTrendAnalysesInput
  }

  export type TrendAnalysisUncheckedCreateWithoutOrganizationInput = {
    id?: string
    projectId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type TrendAnalysisCreateOrConnectWithoutOrganizationInput = {
    where: TrendAnalysisWhereUniqueInput
    create: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput>
  }

  export type TrendAnalysisCreateManyOrganizationInputEnvelope = {
    data: TrendAnalysisCreateManyOrganizationInput | TrendAnalysisCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ScriptCreateWithoutOrganizationInput = {
    id?: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProject: ContentProjectCreateNestedOneWithoutScriptsInput
    narrations?: NarrationCreateNestedManyWithoutScriptInput
  }

  export type ScriptUncheckedCreateWithoutOrganizationInput = {
    id?: string
    projectId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    narrations?: NarrationUncheckedCreateNestedManyWithoutScriptInput
  }

  export type ScriptCreateOrConnectWithoutOrganizationInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput>
  }

  export type ScriptCreateManyOrganizationInputEnvelope = {
    data: ScriptCreateManyOrganizationInput | ScriptCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type NarrationCreateWithoutOrganizationInput = {
    id?: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    script: ScriptCreateNestedOneWithoutNarrationsInput
  }

  export type NarrationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    scriptId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationCreateOrConnectWithoutOrganizationInput = {
    where: NarrationWhereUniqueInput
    create: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput>
  }

  export type NarrationCreateManyOrganizationInputEnvelope = {
    data: NarrationCreateManyOrganizationInput | NarrationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type MediaSuggestionCreateWithoutOrganizationInput = {
    id?: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contentProject: ContentProjectCreateNestedOneWithoutMediaSuggestionsInput
  }

  export type MediaSuggestionUncheckedCreateWithoutOrganizationInput = {
    id?: string
    projectId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MediaSuggestionCreateOrConnectWithoutOrganizationInput = {
    where: MediaSuggestionWhereUniqueInput
    create: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput>
  }

  export type MediaSuggestionCreateManyOrganizationInputEnvelope = {
    data: MediaSuggestionCreateManyOrganizationInput | MediaSuggestionCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PublicationMetadataCreateWithoutOrganizationInput = {
    id?: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProject: ContentProjectCreateNestedOneWithoutPublicationMetadataInput
  }

  export type PublicationMetadataUncheckedCreateWithoutOrganizationInput = {
    id?: string
    projectId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationMetadataCreateOrConnectWithoutOrganizationInput = {
    where: PublicationMetadataWhereUniqueInput
    create: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput>
  }

  export type PublicationMetadataCreateManyOrganizationInputEnvelope = {
    data: PublicationMetadataCreateManyOrganizationInput | PublicationMetadataCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ExportJobCreateWithoutOrganizationInput = {
    id?: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProject: ContentProjectCreateNestedOneWithoutExportJobsInput
  }

  export type ExportJobUncheckedCreateWithoutOrganizationInput = {
    id?: string
    projectId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobCreateOrConnectWithoutOrganizationInput = {
    where: ExportJobWhereUniqueInput
    create: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput>
  }

  export type ExportJobCreateManyOrganizationInputEnvelope = {
    data: ExportJobCreateManyOrganizationInput | ExportJobCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ChannelProfileUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ChannelProfileWhereUniqueInput
    update: XOR<ChannelProfileUpdateWithoutOrganizationInput, ChannelProfileUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ChannelProfileCreateWithoutOrganizationInput, ChannelProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type ChannelProfileUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ChannelProfileWhereUniqueInput
    data: XOR<ChannelProfileUpdateWithoutOrganizationInput, ChannelProfileUncheckedUpdateWithoutOrganizationInput>
  }

  export type ChannelProfileUpdateManyWithWhereWithoutOrganizationInput = {
    where: ChannelProfileScalarWhereInput
    data: XOR<ChannelProfileUpdateManyMutationInput, ChannelProfileUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ChannelProfileScalarWhereInput = {
    AND?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
    OR?: ChannelProfileScalarWhereInput[]
    NOT?: ChannelProfileScalarWhereInput | ChannelProfileScalarWhereInput[]
    id?: StringFilter<"ChannelProfile"> | string
    organizationId?: StringFilter<"ChannelProfile"> | string
    userId?: StringFilter<"ChannelProfile"> | string
    name?: StringFilter<"ChannelProfile"> | string
    platform?: EnumPlatformFilter<"ChannelProfile"> | $Enums.Platform
    niche?: EnumNicheCategoryFilter<"ChannelProfile"> | $Enums.NicheCategory
    tone?: EnumContentToneFilter<"ChannelProfile"> | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFilter<"ChannelProfile"> | $Enums.NarrationStyle
    languageCode?: StringFilter<"ChannelProfile"> | string
    createdAt?: DateTimeFilter<"ChannelProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelProfile"> | Date | string
  }

  export type ContentProjectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ContentProjectWhereUniqueInput
    update: XOR<ContentProjectUpdateWithoutOrganizationInput, ContentProjectUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContentProjectCreateWithoutOrganizationInput, ContentProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ContentProjectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ContentProjectWhereUniqueInput
    data: XOR<ContentProjectUpdateWithoutOrganizationInput, ContentProjectUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContentProjectUpdateManyWithWhereWithoutOrganizationInput = {
    where: ContentProjectScalarWhereInput
    data: XOR<ContentProjectUpdateManyMutationInput, ContentProjectUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ContentProjectScalarWhereInput = {
    AND?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
    OR?: ContentProjectScalarWhereInput[]
    NOT?: ContentProjectScalarWhereInput | ContentProjectScalarWhereInput[]
    id?: StringFilter<"ContentProject"> | string
    organizationId?: StringFilter<"ContentProject"> | string
    channelProfileId?: StringFilter<"ContentProject"> | string
    title?: StringFilter<"ContentProject"> | string
    keyword?: StringFilter<"ContentProject"> | string
    niche?: EnumNicheCategoryFilter<"ContentProject"> | $Enums.NicheCategory
    format?: EnumFormatTypeFilter<"ContentProject"> | $Enums.FormatType
    status?: EnumProjectStatusFilter<"ContentProject"> | $Enums.ProjectStatus
    durationMinutes?: IntNullableFilter<"ContentProject"> | number | null
    createdAt?: DateTimeFilter<"ContentProject"> | Date | string
    updatedAt?: DateTimeFilter<"ContentProject"> | Date | string
  }

  export type TrendAnalysisUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TrendAnalysisWhereUniqueInput
    update: XOR<TrendAnalysisUpdateWithoutOrganizationInput, TrendAnalysisUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TrendAnalysisCreateWithoutOrganizationInput, TrendAnalysisUncheckedCreateWithoutOrganizationInput>
  }

  export type TrendAnalysisUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TrendAnalysisWhereUniqueInput
    data: XOR<TrendAnalysisUpdateWithoutOrganizationInput, TrendAnalysisUncheckedUpdateWithoutOrganizationInput>
  }

  export type TrendAnalysisUpdateManyWithWhereWithoutOrganizationInput = {
    where: TrendAnalysisScalarWhereInput
    data: XOR<TrendAnalysisUpdateManyMutationInput, TrendAnalysisUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TrendAnalysisScalarWhereInput = {
    AND?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
    OR?: TrendAnalysisScalarWhereInput[]
    NOT?: TrendAnalysisScalarWhereInput | TrendAnalysisScalarWhereInput[]
    id?: StringFilter<"TrendAnalysis"> | string
    organizationId?: StringFilter<"TrendAnalysis"> | string
    projectId?: StringFilter<"TrendAnalysis"> | string
    keyword?: StringFilter<"TrendAnalysis"> | string
    data?: JsonFilter<"TrendAnalysis">
    analyzedAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"TrendAnalysis"> | Date | string
  }

  export type ScriptUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutOrganizationInput, ScriptUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ScriptCreateWithoutOrganizationInput, ScriptUncheckedCreateWithoutOrganizationInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutOrganizationInput, ScriptUncheckedUpdateWithoutOrganizationInput>
  }

  export type ScriptUpdateManyWithWhereWithoutOrganizationInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ScriptScalarWhereInput = {
    AND?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
    OR?: ScriptScalarWhereInput[]
    NOT?: ScriptScalarWhereInput | ScriptScalarWhereInput[]
    id?: StringFilter<"Script"> | string
    organizationId?: StringFilter<"Script"> | string
    projectId?: StringFilter<"Script"> | string
    blocks?: JsonFilter<"Script">
    wordCount?: IntNullableFilter<"Script"> | number | null
    estimatedDurationSecs?: IntNullableFilter<"Script"> | number | null
    version?: IntFilter<"Script"> | number
    createdAt?: DateTimeFilter<"Script"> | Date | string
    updatedAt?: DateTimeFilter<"Script"> | Date | string
  }

  export type NarrationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: NarrationWhereUniqueInput
    update: XOR<NarrationUpdateWithoutOrganizationInput, NarrationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<NarrationCreateWithoutOrganizationInput, NarrationUncheckedCreateWithoutOrganizationInput>
  }

  export type NarrationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: NarrationWhereUniqueInput
    data: XOR<NarrationUpdateWithoutOrganizationInput, NarrationUncheckedUpdateWithoutOrganizationInput>
  }

  export type NarrationUpdateManyWithWhereWithoutOrganizationInput = {
    where: NarrationScalarWhereInput
    data: XOR<NarrationUpdateManyMutationInput, NarrationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type NarrationScalarWhereInput = {
    AND?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
    OR?: NarrationScalarWhereInput[]
    NOT?: NarrationScalarWhereInput | NarrationScalarWhereInput[]
    id?: StringFilter<"Narration"> | string
    organizationId?: StringFilter<"Narration"> | string
    scriptId?: StringFilter<"Narration"> | string
    provider?: EnumTtsProviderFilter<"Narration"> | $Enums.TtsProvider
    voiceId?: StringNullableFilter<"Narration"> | string | null
    audioUrl?: StringNullableFilter<"Narration"> | string | null
    durationSecs?: FloatNullableFilter<"Narration"> | number | null
    status?: EnumJobStatusFilter<"Narration"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Narration"> | Date | string
    updatedAt?: DateTimeFilter<"Narration"> | Date | string
  }

  export type MediaSuggestionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: MediaSuggestionWhereUniqueInput
    update: XOR<MediaSuggestionUpdateWithoutOrganizationInput, MediaSuggestionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<MediaSuggestionCreateWithoutOrganizationInput, MediaSuggestionUncheckedCreateWithoutOrganizationInput>
  }

  export type MediaSuggestionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: MediaSuggestionWhereUniqueInput
    data: XOR<MediaSuggestionUpdateWithoutOrganizationInput, MediaSuggestionUncheckedUpdateWithoutOrganizationInput>
  }

  export type MediaSuggestionUpdateManyWithWhereWithoutOrganizationInput = {
    where: MediaSuggestionScalarWhereInput
    data: XOR<MediaSuggestionUpdateManyMutationInput, MediaSuggestionUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type MediaSuggestionScalarWhereInput = {
    AND?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
    OR?: MediaSuggestionScalarWhereInput[]
    NOT?: MediaSuggestionScalarWhereInput | MediaSuggestionScalarWhereInput[]
    id?: StringFilter<"MediaSuggestion"> | string
    organizationId?: StringFilter<"MediaSuggestion"> | string
    projectId?: StringFilter<"MediaSuggestion"> | string
    type?: EnumAssetTypeFilter<"MediaSuggestion"> | $Enums.AssetType
    prompt?: StringNullableFilter<"MediaSuggestion"> | string | null
    url?: StringNullableFilter<"MediaSuggestion"> | string | null
    metadata?: JsonNullableFilter<"MediaSuggestion">
    createdAt?: DateTimeFilter<"MediaSuggestion"> | Date | string
  }

  export type PublicationMetadataUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PublicationMetadataWhereUniqueInput
    update: XOR<PublicationMetadataUpdateWithoutOrganizationInput, PublicationMetadataUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PublicationMetadataCreateWithoutOrganizationInput, PublicationMetadataUncheckedCreateWithoutOrganizationInput>
  }

  export type PublicationMetadataUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PublicationMetadataWhereUniqueInput
    data: XOR<PublicationMetadataUpdateWithoutOrganizationInput, PublicationMetadataUncheckedUpdateWithoutOrganizationInput>
  }

  export type PublicationMetadataUpdateManyWithWhereWithoutOrganizationInput = {
    where: PublicationMetadataScalarWhereInput
    data: XOR<PublicationMetadataUpdateManyMutationInput, PublicationMetadataUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PublicationMetadataScalarWhereInput = {
    AND?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
    OR?: PublicationMetadataScalarWhereInput[]
    NOT?: PublicationMetadataScalarWhereInput | PublicationMetadataScalarWhereInput[]
    id?: StringFilter<"PublicationMetadata"> | string
    organizationId?: StringFilter<"PublicationMetadata"> | string
    projectId?: StringFilter<"PublicationMetadata"> | string
    title?: StringNullableFilter<"PublicationMetadata"> | string | null
    description?: StringNullableFilter<"PublicationMetadata"> | string | null
    tags?: StringNullableListFilter<"PublicationMetadata">
    thumbnailUrl?: StringNullableFilter<"PublicationMetadata"> | string | null
    platform?: EnumPlatformFilter<"PublicationMetadata"> | $Enums.Platform
    scheduledAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"PublicationMetadata"> | Date | string | null
    createdAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"PublicationMetadata"> | Date | string
  }

  export type ExportJobUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ExportJobWhereUniqueInput
    update: XOR<ExportJobUpdateWithoutOrganizationInput, ExportJobUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ExportJobCreateWithoutOrganizationInput, ExportJobUncheckedCreateWithoutOrganizationInput>
  }

  export type ExportJobUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ExportJobWhereUniqueInput
    data: XOR<ExportJobUpdateWithoutOrganizationInput, ExportJobUncheckedUpdateWithoutOrganizationInput>
  }

  export type ExportJobUpdateManyWithWhereWithoutOrganizationInput = {
    where: ExportJobScalarWhereInput
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ExportJobScalarWhereInput = {
    AND?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
    OR?: ExportJobScalarWhereInput[]
    NOT?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
    id?: StringFilter<"ExportJob"> | string
    organizationId?: StringFilter<"ExportJob"> | string
    projectId?: StringFilter<"ExportJob"> | string
    assetType?: EnumAssetTypeFilter<"ExportJob"> | $Enums.AssetType
    status?: EnumJobStatusFilter<"ExportJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    startedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type ChannelProfileCreateWithoutUserInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutChannelProfilesInput
    contentProjects?: ContentProjectCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutChannelProfileInput
  }

  export type ChannelProfileCreateOrConnectWithoutUserInput = {
    where: ChannelProfileWhereUniqueInput
    create: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput>
  }

  export type ChannelProfileCreateManyUserInputEnvelope = {
    data: ChannelProfileCreateManyUserInput | ChannelProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ChannelProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelProfileWhereUniqueInput
    update: XOR<ChannelProfileUpdateWithoutUserInput, ChannelProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelProfileCreateWithoutUserInput, ChannelProfileUncheckedCreateWithoutUserInput>
  }

  export type ChannelProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelProfileWhereUniqueInput
    data: XOR<ChannelProfileUpdateWithoutUserInput, ChannelProfileUncheckedUpdateWithoutUserInput>
  }

  export type ChannelProfileUpdateManyWithWhereWithoutUserInput = {
    where: ChannelProfileScalarWhereInput
    data: XOR<ChannelProfileUpdateManyMutationInput, ChannelProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    organizationId: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutChannelProfilesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutChannelProfilesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutChannelProfilesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutChannelProfilesInput, OrganizationUncheckedCreateWithoutChannelProfilesInput>
  }

  export type UserCreateWithoutChannelProfilesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelProfilesInput = {
    id?: string
    organizationId: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelProfilesInput, UserUncheckedCreateWithoutChannelProfilesInput>
  }

  export type ContentProjectCreateWithoutChannelProfileInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutChannelProfileInput = {
    id?: string
    organizationId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutChannelProfileInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput>
  }

  export type ContentProjectCreateManyChannelProfileInputEnvelope = {
    data: ContentProjectCreateManyChannelProfileInput | ContentProjectCreateManyChannelProfileInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutChannelProfilesInput = {
    update: XOR<OrganizationUpdateWithoutChannelProfilesInput, OrganizationUncheckedUpdateWithoutChannelProfilesInput>
    create: XOR<OrganizationCreateWithoutChannelProfilesInput, OrganizationUncheckedCreateWithoutChannelProfilesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutChannelProfilesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutChannelProfilesInput, OrganizationUncheckedUpdateWithoutChannelProfilesInput>
  }

  export type OrganizationUpdateWithoutChannelProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutChannelProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutChannelProfilesInput = {
    update: XOR<UserUpdateWithoutChannelProfilesInput, UserUncheckedUpdateWithoutChannelProfilesInput>
    create: XOR<UserCreateWithoutChannelProfilesInput, UserUncheckedCreateWithoutChannelProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelProfilesInput, UserUncheckedUpdateWithoutChannelProfilesInput>
  }

  export type UserUpdateWithoutChannelProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentProjectUpsertWithWhereUniqueWithoutChannelProfileInput = {
    where: ContentProjectWhereUniqueInput
    update: XOR<ContentProjectUpdateWithoutChannelProfileInput, ContentProjectUncheckedUpdateWithoutChannelProfileInput>
    create: XOR<ContentProjectCreateWithoutChannelProfileInput, ContentProjectUncheckedCreateWithoutChannelProfileInput>
  }

  export type ContentProjectUpdateWithWhereUniqueWithoutChannelProfileInput = {
    where: ContentProjectWhereUniqueInput
    data: XOR<ContentProjectUpdateWithoutChannelProfileInput, ContentProjectUncheckedUpdateWithoutChannelProfileInput>
  }

  export type ContentProjectUpdateManyWithWhereWithoutChannelProfileInput = {
    where: ContentProjectScalarWhereInput
    data: XOR<ContentProjectUpdateManyMutationInput, ContentProjectUncheckedUpdateManyWithoutChannelProfileInput>
  }

  export type OrganizationCreateWithoutContentProjectsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContentProjectsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContentProjectsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContentProjectsInput, OrganizationUncheckedCreateWithoutContentProjectsInput>
  }

  export type ChannelProfileCreateWithoutContentProjectsInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutChannelProfilesInput
    user: UserCreateNestedOneWithoutChannelProfilesInput
  }

  export type ChannelProfileUncheckedCreateWithoutContentProjectsInput = {
    id?: string
    organizationId: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelProfileCreateOrConnectWithoutContentProjectsInput = {
    where: ChannelProfileWhereUniqueInput
    create: XOR<ChannelProfileCreateWithoutContentProjectsInput, ChannelProfileUncheckedCreateWithoutContentProjectsInput>
  }

  export type TrendAnalysisCreateWithoutContentProjectInput = {
    id?: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTrendAnalysesInput
  }

  export type TrendAnalysisUncheckedCreateWithoutContentProjectInput = {
    id?: string
    organizationId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type TrendAnalysisCreateOrConnectWithoutContentProjectInput = {
    where: TrendAnalysisWhereUniqueInput
    create: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput>
  }

  export type TrendAnalysisCreateManyContentProjectInputEnvelope = {
    data: TrendAnalysisCreateManyContentProjectInput | TrendAnalysisCreateManyContentProjectInput[]
    skipDuplicates?: boolean
  }

  export type ScriptCreateWithoutContentProjectInput = {
    id?: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutScriptsInput
    narrations?: NarrationCreateNestedManyWithoutScriptInput
  }

  export type ScriptUncheckedCreateWithoutContentProjectInput = {
    id?: string
    organizationId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    narrations?: NarrationUncheckedCreateNestedManyWithoutScriptInput
  }

  export type ScriptCreateOrConnectWithoutContentProjectInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput>
  }

  export type ScriptCreateManyContentProjectInputEnvelope = {
    data: ScriptCreateManyContentProjectInput | ScriptCreateManyContentProjectInput[]
    skipDuplicates?: boolean
  }

  export type MediaSuggestionCreateWithoutContentProjectInput = {
    id?: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMediaSuggestionsInput
  }

  export type MediaSuggestionUncheckedCreateWithoutContentProjectInput = {
    id?: string
    organizationId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MediaSuggestionCreateOrConnectWithoutContentProjectInput = {
    where: MediaSuggestionWhereUniqueInput
    create: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput>
  }

  export type MediaSuggestionCreateManyContentProjectInputEnvelope = {
    data: MediaSuggestionCreateManyContentProjectInput | MediaSuggestionCreateManyContentProjectInput[]
    skipDuplicates?: boolean
  }

  export type PublicationMetadataCreateWithoutContentProjectInput = {
    id?: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPublicationMetadataInput
  }

  export type PublicationMetadataUncheckedCreateWithoutContentProjectInput = {
    id?: string
    organizationId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationMetadataCreateOrConnectWithoutContentProjectInput = {
    where: PublicationMetadataWhereUniqueInput
    create: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput>
  }

  export type PublicationMetadataCreateManyContentProjectInputEnvelope = {
    data: PublicationMetadataCreateManyContentProjectInput | PublicationMetadataCreateManyContentProjectInput[]
    skipDuplicates?: boolean
  }

  export type ExportJobCreateWithoutContentProjectInput = {
    id?: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutExportJobsInput
  }

  export type ExportJobUncheckedCreateWithoutContentProjectInput = {
    id?: string
    organizationId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobCreateOrConnectWithoutContentProjectInput = {
    where: ExportJobWhereUniqueInput
    create: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput>
  }

  export type ExportJobCreateManyContentProjectInputEnvelope = {
    data: ExportJobCreateManyContentProjectInput | ExportJobCreateManyContentProjectInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutContentProjectsInput = {
    update: XOR<OrganizationUpdateWithoutContentProjectsInput, OrganizationUncheckedUpdateWithoutContentProjectsInput>
    create: XOR<OrganizationCreateWithoutContentProjectsInput, OrganizationUncheckedCreateWithoutContentProjectsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutContentProjectsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutContentProjectsInput, OrganizationUncheckedUpdateWithoutContentProjectsInput>
  }

  export type OrganizationUpdateWithoutContentProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContentProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ChannelProfileUpsertWithoutContentProjectsInput = {
    update: XOR<ChannelProfileUpdateWithoutContentProjectsInput, ChannelProfileUncheckedUpdateWithoutContentProjectsInput>
    create: XOR<ChannelProfileCreateWithoutContentProjectsInput, ChannelProfileUncheckedCreateWithoutContentProjectsInput>
    where?: ChannelProfileWhereInput
  }

  export type ChannelProfileUpdateToOneWithWhereWithoutContentProjectsInput = {
    where?: ChannelProfileWhereInput
    data: XOR<ChannelProfileUpdateWithoutContentProjectsInput, ChannelProfileUncheckedUpdateWithoutContentProjectsInput>
  }

  export type ChannelProfileUpdateWithoutContentProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutChannelProfilesNestedInput
    user?: UserUpdateOneRequiredWithoutChannelProfilesNestedInput
  }

  export type ChannelProfileUncheckedUpdateWithoutContentProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisUpsertWithWhereUniqueWithoutContentProjectInput = {
    where: TrendAnalysisWhereUniqueInput
    update: XOR<TrendAnalysisUpdateWithoutContentProjectInput, TrendAnalysisUncheckedUpdateWithoutContentProjectInput>
    create: XOR<TrendAnalysisCreateWithoutContentProjectInput, TrendAnalysisUncheckedCreateWithoutContentProjectInput>
  }

  export type TrendAnalysisUpdateWithWhereUniqueWithoutContentProjectInput = {
    where: TrendAnalysisWhereUniqueInput
    data: XOR<TrendAnalysisUpdateWithoutContentProjectInput, TrendAnalysisUncheckedUpdateWithoutContentProjectInput>
  }

  export type TrendAnalysisUpdateManyWithWhereWithoutContentProjectInput = {
    where: TrendAnalysisScalarWhereInput
    data: XOR<TrendAnalysisUpdateManyMutationInput, TrendAnalysisUncheckedUpdateManyWithoutContentProjectInput>
  }

  export type ScriptUpsertWithWhereUniqueWithoutContentProjectInput = {
    where: ScriptWhereUniqueInput
    update: XOR<ScriptUpdateWithoutContentProjectInput, ScriptUncheckedUpdateWithoutContentProjectInput>
    create: XOR<ScriptCreateWithoutContentProjectInput, ScriptUncheckedCreateWithoutContentProjectInput>
  }

  export type ScriptUpdateWithWhereUniqueWithoutContentProjectInput = {
    where: ScriptWhereUniqueInput
    data: XOR<ScriptUpdateWithoutContentProjectInput, ScriptUncheckedUpdateWithoutContentProjectInput>
  }

  export type ScriptUpdateManyWithWhereWithoutContentProjectInput = {
    where: ScriptScalarWhereInput
    data: XOR<ScriptUpdateManyMutationInput, ScriptUncheckedUpdateManyWithoutContentProjectInput>
  }

  export type MediaSuggestionUpsertWithWhereUniqueWithoutContentProjectInput = {
    where: MediaSuggestionWhereUniqueInput
    update: XOR<MediaSuggestionUpdateWithoutContentProjectInput, MediaSuggestionUncheckedUpdateWithoutContentProjectInput>
    create: XOR<MediaSuggestionCreateWithoutContentProjectInput, MediaSuggestionUncheckedCreateWithoutContentProjectInput>
  }

  export type MediaSuggestionUpdateWithWhereUniqueWithoutContentProjectInput = {
    where: MediaSuggestionWhereUniqueInput
    data: XOR<MediaSuggestionUpdateWithoutContentProjectInput, MediaSuggestionUncheckedUpdateWithoutContentProjectInput>
  }

  export type MediaSuggestionUpdateManyWithWhereWithoutContentProjectInput = {
    where: MediaSuggestionScalarWhereInput
    data: XOR<MediaSuggestionUpdateManyMutationInput, MediaSuggestionUncheckedUpdateManyWithoutContentProjectInput>
  }

  export type PublicationMetadataUpsertWithWhereUniqueWithoutContentProjectInput = {
    where: PublicationMetadataWhereUniqueInput
    update: XOR<PublicationMetadataUpdateWithoutContentProjectInput, PublicationMetadataUncheckedUpdateWithoutContentProjectInput>
    create: XOR<PublicationMetadataCreateWithoutContentProjectInput, PublicationMetadataUncheckedCreateWithoutContentProjectInput>
  }

  export type PublicationMetadataUpdateWithWhereUniqueWithoutContentProjectInput = {
    where: PublicationMetadataWhereUniqueInput
    data: XOR<PublicationMetadataUpdateWithoutContentProjectInput, PublicationMetadataUncheckedUpdateWithoutContentProjectInput>
  }

  export type PublicationMetadataUpdateManyWithWhereWithoutContentProjectInput = {
    where: PublicationMetadataScalarWhereInput
    data: XOR<PublicationMetadataUpdateManyMutationInput, PublicationMetadataUncheckedUpdateManyWithoutContentProjectInput>
  }

  export type ExportJobUpsertWithWhereUniqueWithoutContentProjectInput = {
    where: ExportJobWhereUniqueInput
    update: XOR<ExportJobUpdateWithoutContentProjectInput, ExportJobUncheckedUpdateWithoutContentProjectInput>
    create: XOR<ExportJobCreateWithoutContentProjectInput, ExportJobUncheckedCreateWithoutContentProjectInput>
  }

  export type ExportJobUpdateWithWhereUniqueWithoutContentProjectInput = {
    where: ExportJobWhereUniqueInput
    data: XOR<ExportJobUpdateWithoutContentProjectInput, ExportJobUncheckedUpdateWithoutContentProjectInput>
  }

  export type ExportJobUpdateManyWithWhereWithoutContentProjectInput = {
    where: ExportJobScalarWhereInput
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyWithoutContentProjectInput>
  }

  export type OrganizationCreateWithoutTrendAnalysesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTrendAnalysesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTrendAnalysesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTrendAnalysesInput, OrganizationUncheckedCreateWithoutTrendAnalysesInput>
  }

  export type ContentProjectCreateWithoutTrendAnalysesInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutTrendAnalysesInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutTrendAnalysesInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutTrendAnalysesInput, ContentProjectUncheckedCreateWithoutTrendAnalysesInput>
  }

  export type OrganizationUpsertWithoutTrendAnalysesInput = {
    update: XOR<OrganizationUpdateWithoutTrendAnalysesInput, OrganizationUncheckedUpdateWithoutTrendAnalysesInput>
    create: XOR<OrganizationCreateWithoutTrendAnalysesInput, OrganizationUncheckedCreateWithoutTrendAnalysesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTrendAnalysesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTrendAnalysesInput, OrganizationUncheckedUpdateWithoutTrendAnalysesInput>
  }

  export type OrganizationUpdateWithoutTrendAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTrendAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContentProjectUpsertWithoutTrendAnalysesInput = {
    update: XOR<ContentProjectUpdateWithoutTrendAnalysesInput, ContentProjectUncheckedUpdateWithoutTrendAnalysesInput>
    create: XOR<ContentProjectCreateWithoutTrendAnalysesInput, ContentProjectUncheckedCreateWithoutTrendAnalysesInput>
    where?: ContentProjectWhereInput
  }

  export type ContentProjectUpdateToOneWithWhereWithoutTrendAnalysesInput = {
    where?: ContentProjectWhereInput
    data: XOR<ContentProjectUpdateWithoutTrendAnalysesInput, ContentProjectUncheckedUpdateWithoutTrendAnalysesInput>
  }

  export type ContentProjectUpdateWithoutTrendAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutTrendAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type OrganizationCreateWithoutScriptsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutScriptsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutScriptsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutScriptsInput, OrganizationUncheckedCreateWithoutScriptsInput>
  }

  export type ContentProjectCreateWithoutScriptsInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutScriptsInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutScriptsInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutScriptsInput, ContentProjectUncheckedCreateWithoutScriptsInput>
  }

  export type NarrationCreateWithoutScriptInput = {
    id?: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutNarrationsInput
  }

  export type NarrationUncheckedCreateWithoutScriptInput = {
    id?: string
    organizationId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationCreateOrConnectWithoutScriptInput = {
    where: NarrationWhereUniqueInput
    create: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput>
  }

  export type NarrationCreateManyScriptInputEnvelope = {
    data: NarrationCreateManyScriptInput | NarrationCreateManyScriptInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutScriptsInput = {
    update: XOR<OrganizationUpdateWithoutScriptsInput, OrganizationUncheckedUpdateWithoutScriptsInput>
    create: XOR<OrganizationCreateWithoutScriptsInput, OrganizationUncheckedCreateWithoutScriptsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutScriptsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutScriptsInput, OrganizationUncheckedUpdateWithoutScriptsInput>
  }

  export type OrganizationUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContentProjectUpsertWithoutScriptsInput = {
    update: XOR<ContentProjectUpdateWithoutScriptsInput, ContentProjectUncheckedUpdateWithoutScriptsInput>
    create: XOR<ContentProjectCreateWithoutScriptsInput, ContentProjectUncheckedCreateWithoutScriptsInput>
    where?: ContentProjectWhereInput
  }

  export type ContentProjectUpdateToOneWithWhereWithoutScriptsInput = {
    where?: ContentProjectWhereInput
    data: XOR<ContentProjectUpdateWithoutScriptsInput, ContentProjectUncheckedUpdateWithoutScriptsInput>
  }

  export type ContentProjectUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutScriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type NarrationUpsertWithWhereUniqueWithoutScriptInput = {
    where: NarrationWhereUniqueInput
    update: XOR<NarrationUpdateWithoutScriptInput, NarrationUncheckedUpdateWithoutScriptInput>
    create: XOR<NarrationCreateWithoutScriptInput, NarrationUncheckedCreateWithoutScriptInput>
  }

  export type NarrationUpdateWithWhereUniqueWithoutScriptInput = {
    where: NarrationWhereUniqueInput
    data: XOR<NarrationUpdateWithoutScriptInput, NarrationUncheckedUpdateWithoutScriptInput>
  }

  export type NarrationUpdateManyWithWhereWithoutScriptInput = {
    where: NarrationScalarWhereInput
    data: XOR<NarrationUpdateManyMutationInput, NarrationUncheckedUpdateManyWithoutScriptInput>
  }

  export type OrganizationCreateWithoutNarrationsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutNarrationsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutNarrationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutNarrationsInput, OrganizationUncheckedCreateWithoutNarrationsInput>
  }

  export type ScriptCreateWithoutNarrationsInput = {
    id?: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutScriptsInput
    contentProject: ContentProjectCreateNestedOneWithoutScriptsInput
  }

  export type ScriptUncheckedCreateWithoutNarrationsInput = {
    id?: string
    organizationId: string
    projectId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScriptCreateOrConnectWithoutNarrationsInput = {
    where: ScriptWhereUniqueInput
    create: XOR<ScriptCreateWithoutNarrationsInput, ScriptUncheckedCreateWithoutNarrationsInput>
  }

  export type OrganizationUpsertWithoutNarrationsInput = {
    update: XOR<OrganizationUpdateWithoutNarrationsInput, OrganizationUncheckedUpdateWithoutNarrationsInput>
    create: XOR<OrganizationCreateWithoutNarrationsInput, OrganizationUncheckedCreateWithoutNarrationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutNarrationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutNarrationsInput, OrganizationUncheckedUpdateWithoutNarrationsInput>
  }

  export type OrganizationUpdateWithoutNarrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutNarrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ScriptUpsertWithoutNarrationsInput = {
    update: XOR<ScriptUpdateWithoutNarrationsInput, ScriptUncheckedUpdateWithoutNarrationsInput>
    create: XOR<ScriptCreateWithoutNarrationsInput, ScriptUncheckedCreateWithoutNarrationsInput>
    where?: ScriptWhereInput
  }

  export type ScriptUpdateToOneWithWhereWithoutNarrationsInput = {
    where?: ScriptWhereInput
    data: XOR<ScriptUpdateWithoutNarrationsInput, ScriptUncheckedUpdateWithoutNarrationsInput>
  }

  export type ScriptUpdateWithoutNarrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutScriptsNestedInput
    contentProject?: ContentProjectUpdateOneRequiredWithoutScriptsNestedInput
  }

  export type ScriptUncheckedUpdateWithoutNarrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutMediaSuggestionsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMediaSuggestionsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMediaSuggestionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMediaSuggestionsInput, OrganizationUncheckedCreateWithoutMediaSuggestionsInput>
  }

  export type ContentProjectCreateWithoutMediaSuggestionsInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutMediaSuggestionsInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutMediaSuggestionsInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutMediaSuggestionsInput, ContentProjectUncheckedCreateWithoutMediaSuggestionsInput>
  }

  export type OrganizationUpsertWithoutMediaSuggestionsInput = {
    update: XOR<OrganizationUpdateWithoutMediaSuggestionsInput, OrganizationUncheckedUpdateWithoutMediaSuggestionsInput>
    create: XOR<OrganizationCreateWithoutMediaSuggestionsInput, OrganizationUncheckedCreateWithoutMediaSuggestionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMediaSuggestionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMediaSuggestionsInput, OrganizationUncheckedUpdateWithoutMediaSuggestionsInput>
  }

  export type OrganizationUpdateWithoutMediaSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMediaSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContentProjectUpsertWithoutMediaSuggestionsInput = {
    update: XOR<ContentProjectUpdateWithoutMediaSuggestionsInput, ContentProjectUncheckedUpdateWithoutMediaSuggestionsInput>
    create: XOR<ContentProjectCreateWithoutMediaSuggestionsInput, ContentProjectUncheckedCreateWithoutMediaSuggestionsInput>
    where?: ContentProjectWhereInput
  }

  export type ContentProjectUpdateToOneWithWhereWithoutMediaSuggestionsInput = {
    where?: ContentProjectWhereInput
    data: XOR<ContentProjectUpdateWithoutMediaSuggestionsInput, ContentProjectUncheckedUpdateWithoutMediaSuggestionsInput>
  }

  export type ContentProjectUpdateWithoutMediaSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutMediaSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type OrganizationCreateWithoutPublicationMetadataInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPublicationMetadataInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPublicationMetadataInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPublicationMetadataInput, OrganizationUncheckedCreateWithoutPublicationMetadataInput>
  }

  export type ContentProjectCreateWithoutPublicationMetadataInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutPublicationMetadataInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutPublicationMetadataInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutPublicationMetadataInput, ContentProjectUncheckedCreateWithoutPublicationMetadataInput>
  }

  export type OrganizationUpsertWithoutPublicationMetadataInput = {
    update: XOR<OrganizationUpdateWithoutPublicationMetadataInput, OrganizationUncheckedUpdateWithoutPublicationMetadataInput>
    create: XOR<OrganizationCreateWithoutPublicationMetadataInput, OrganizationUncheckedCreateWithoutPublicationMetadataInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPublicationMetadataInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPublicationMetadataInput, OrganizationUncheckedUpdateWithoutPublicationMetadataInput>
  }

  export type OrganizationUpdateWithoutPublicationMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPublicationMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContentProjectUpsertWithoutPublicationMetadataInput = {
    update: XOR<ContentProjectUpdateWithoutPublicationMetadataInput, ContentProjectUncheckedUpdateWithoutPublicationMetadataInput>
    create: XOR<ContentProjectCreateWithoutPublicationMetadataInput, ContentProjectUncheckedCreateWithoutPublicationMetadataInput>
    where?: ContentProjectWhereInput
  }

  export type ContentProjectUpdateToOneWithWhereWithoutPublicationMetadataInput = {
    where?: ContentProjectWhereInput
    data: XOR<ContentProjectUpdateWithoutPublicationMetadataInput, ContentProjectUncheckedUpdateWithoutPublicationMetadataInput>
  }

  export type ContentProjectUpdateWithoutPublicationMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutPublicationMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type OrganizationCreateWithoutExportJobsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutExportJobsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    channelProfiles?: ChannelProfileUncheckedCreateNestedManyWithoutOrganizationInput
    contentProjects?: ContentProjectUncheckedCreateNestedManyWithoutOrganizationInput
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutOrganizationInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutOrganizationInput
    narrations?: NarrationUncheckedCreateNestedManyWithoutOrganizationInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutOrganizationInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutExportJobsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutExportJobsInput, OrganizationUncheckedCreateWithoutExportJobsInput>
  }

  export type ContentProjectCreateWithoutExportJobsInput = {
    id?: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContentProjectsInput
    channelProfile: ChannelProfileCreateNestedOneWithoutContentProjectsInput
    trendAnalyses?: TrendAnalysisCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectUncheckedCreateWithoutExportJobsInput = {
    id?: string
    organizationId: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trendAnalyses?: TrendAnalysisUncheckedCreateNestedManyWithoutContentProjectInput
    scripts?: ScriptUncheckedCreateNestedManyWithoutContentProjectInput
    mediaSuggestions?: MediaSuggestionUncheckedCreateNestedManyWithoutContentProjectInput
    publicationMetadata?: PublicationMetadataUncheckedCreateNestedManyWithoutContentProjectInput
  }

  export type ContentProjectCreateOrConnectWithoutExportJobsInput = {
    where: ContentProjectWhereUniqueInput
    create: XOR<ContentProjectCreateWithoutExportJobsInput, ContentProjectUncheckedCreateWithoutExportJobsInput>
  }

  export type OrganizationUpsertWithoutExportJobsInput = {
    update: XOR<OrganizationUpdateWithoutExportJobsInput, OrganizationUncheckedUpdateWithoutExportJobsInput>
    create: XOR<OrganizationCreateWithoutExportJobsInput, OrganizationUncheckedCreateWithoutExportJobsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutExportJobsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutExportJobsInput, OrganizationUncheckedUpdateWithoutExportJobsInput>
  }

  export type OrganizationUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutOrganizationNestedInput
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutOrganizationNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutOrganizationNestedInput
    narrations?: NarrationUncheckedUpdateManyWithoutOrganizationNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutOrganizationNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContentProjectUpsertWithoutExportJobsInput = {
    update: XOR<ContentProjectUpdateWithoutExportJobsInput, ContentProjectUncheckedUpdateWithoutExportJobsInput>
    create: XOR<ContentProjectCreateWithoutExportJobsInput, ContentProjectUncheckedCreateWithoutExportJobsInput>
    where?: ContentProjectWhereInput
  }

  export type ContentProjectUpdateToOneWithWhereWithoutExportJobsInput = {
    where?: ContentProjectWhereInput
    data: XOR<ContentProjectUpdateWithoutExportJobsInput, ContentProjectUncheckedUpdateWithoutExportJobsInput>
  }

  export type ContentProjectUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelProfileCreateManyOrganizationInput = {
    id?: string
    userId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentProjectCreateManyOrganizationInput = {
    id?: string
    channelProfileId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrendAnalysisCreateManyOrganizationInput = {
    id?: string
    projectId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type ScriptCreateManyOrganizationInput = {
    id?: string
    projectId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationCreateManyOrganizationInput = {
    id?: string
    scriptId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaSuggestionCreateManyOrganizationInput = {
    id?: string
    projectId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PublicationMetadataCreateManyOrganizationInput = {
    id?: string
    projectId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobCreateManyOrganizationInput = {
    id?: string
    projectId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfiles?: ChannelProfileUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelProfileUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelProfilesNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentProjectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelProfile?: ChannelProfileUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProject?: ContentProjectUpdateOneRequiredWithoutTrendAnalysesNestedInput
  }

  export type TrendAnalysisUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProject?: ContentProjectUpdateOneRequiredWithoutScriptsNestedInput
    narrations?: NarrationUpdateManyWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    narrations?: NarrationUncheckedUpdateManyWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    script?: ScriptUpdateOneRequiredWithoutNarrationsNestedInput
  }

  export type NarrationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scriptId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scriptId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProject?: ContentProjectUpdateOneRequiredWithoutMediaSuggestionsNestedInput
  }

  export type MediaSuggestionUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProject?: ContentProjectUpdateOneRequiredWithoutPublicationMetadataNestedInput
  }

  export type PublicationMetadataUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProject?: ContentProjectUpdateOneRequiredWithoutExportJobsNestedInput
  }

  export type ExportJobUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelProfileCreateManyUserInput = {
    id?: string
    organizationId: string
    name: string
    platform: $Enums.Platform
    niche: $Enums.NicheCategory
    tone: $Enums.ContentTone
    narrationStyle: $Enums.NarrationStyle
    languageCode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ChannelProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutChannelProfilesNestedInput
    contentProjects?: ContentProjectUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentProjects?: ContentProjectUncheckedUpdateManyWithoutChannelProfileNestedInput
  }

  export type ChannelProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    tone?: EnumContentToneFieldUpdateOperationsInput | $Enums.ContentTone
    narrationStyle?: EnumNarrationStyleFieldUpdateOperationsInput | $Enums.NarrationStyle
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentProjectCreateManyChannelProfileInput = {
    id?: string
    organizationId: string
    title: string
    keyword: string
    niche: $Enums.NicheCategory
    format: $Enums.FormatType
    status?: $Enums.ProjectStatus
    durationMinutes?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentProjectUpdateWithoutChannelProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContentProjectsNestedInput
    trendAnalyses?: TrendAnalysisUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateWithoutChannelProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trendAnalyses?: TrendAnalysisUncheckedUpdateManyWithoutContentProjectNestedInput
    scripts?: ScriptUncheckedUpdateManyWithoutContentProjectNestedInput
    mediaSuggestions?: MediaSuggestionUncheckedUpdateManyWithoutContentProjectNestedInput
    publicationMetadata?: PublicationMetadataUncheckedUpdateManyWithoutContentProjectNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutContentProjectNestedInput
  }

  export type ContentProjectUncheckedUpdateManyWithoutChannelProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    niche?: EnumNicheCategoryFieldUpdateOperationsInput | $Enums.NicheCategory
    format?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisCreateManyContentProjectInput = {
    id?: string
    organizationId: string
    keyword: string
    data: JsonNullValueInput | InputJsonValue
    analyzedAt?: Date | string
    createdAt?: Date | string
  }

  export type ScriptCreateManyContentProjectInput = {
    id?: string
    organizationId: string
    blocks: JsonNullValueInput | InputJsonValue
    wordCount?: number | null
    estimatedDurationSecs?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaSuggestionCreateManyContentProjectInput = {
    id?: string
    organizationId: string
    type: $Enums.AssetType
    prompt?: string | null
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PublicationMetadataCreateManyContentProjectInput = {
    id?: string
    organizationId: string
    title?: string | null
    description?: string | null
    tags?: PublicationMetadataCreatetagsInput | string[]
    thumbnailUrl?: string | null
    platform: $Enums.Platform
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobCreateManyContentProjectInput = {
    id?: string
    organizationId: string
    assetType: $Enums.AssetType
    status?: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrendAnalysisUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTrendAnalysesNestedInput
  }

  export type TrendAnalysisUncheckedUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendAnalysisUncheckedUpdateManyWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutScriptsNestedInput
    narrations?: NarrationUpdateManyWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    narrations?: NarrationUncheckedUpdateManyWithoutScriptNestedInput
  }

  export type ScriptUncheckedUpdateManyWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    blocks?: JsonNullValueInput | InputJsonValue
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedDurationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMediaSuggestionsNestedInput
  }

  export type MediaSuggestionUncheckedUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaSuggestionUncheckedUpdateManyWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPublicationMetadataNestedInput
  }

  export type PublicationMetadataUncheckedUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationMetadataUncheckedUpdateManyWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PublicationMetadataUpdatetagsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutExportJobsNestedInput
  }

  export type ExportJobUncheckedUpdateWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUncheckedUpdateManyWithoutContentProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationCreateManyScriptInput = {
    id?: string
    organizationId: string
    provider: $Enums.TtsProvider
    voiceId?: string | null
    audioUrl?: string | null
    durationSecs?: number | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NarrationUpdateWithoutScriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutNarrationsNestedInput
  }

  export type NarrationUncheckedUpdateWithoutScriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrationUncheckedUpdateManyWithoutScriptInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    provider?: EnumTtsProviderFieldUpdateOperationsInput | $Enums.TtsProvider
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSecs?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}