import { FastifyInstance } from "fastify";
export interface FastifyRegistration {
    server: FastifyInstance;
    port: number | string;
}
export declare type RegisterFastifyInstance = () => Promise<FastifyRegistration>;
export declare function bootstrap(registerServer: RegisterFastifyInstance): Promise<void>;
//# sourceMappingURL=bootstrap.d.ts.map