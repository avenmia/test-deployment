import { AzureFunction, Context } from "@azure/functions";
import * as apidoc from './apidoc.json';

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> 
{
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(apidoc)
    };
};

export default httpTrigger;
