import {drizzle} from "db0/integrations/drizzle";
import {RDSDataClient} from "@aws-sdk/client-rds-data";
import {fromIni} from "@aws-sdk/credential-provider-ini";

const config = useRuntimeConfig()

const rdsClient = new RDSDataClient({
    credentials: fromIni({ profile: config.awsProfile }),
})

export function useDrizzle() {
    return drizzle(rdsClient, {
        database: config.awsDatabase,
        secretArn: config.awsSecretArn,
        resourceArn: config.awsResourceArn,
    })
}