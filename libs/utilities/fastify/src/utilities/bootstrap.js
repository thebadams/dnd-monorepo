export async function bootstrap(registerServer) {
    const { server, port } = await registerServer();
    try {
        await server.listen(port);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
