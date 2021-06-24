import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> 
{
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(req.headers)
    };
};

export default httpTrigger;
