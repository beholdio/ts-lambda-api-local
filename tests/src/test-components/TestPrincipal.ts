import { Principal } from "@beholdio/ts-lambda-api"

export class TestPrincipal extends Principal {
    public constructor() {
        super("dummy")
    }
}
