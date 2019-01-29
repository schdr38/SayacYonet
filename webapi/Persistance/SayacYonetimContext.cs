using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using webapi.Core.Models;

namespace webapi.Persistance
{
    public class SayacYonetimContext
    {
    public readonly IMongoDatabase database = null;
        

    public SayacYonetimContext(IOptions<Settings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        if (client != null)
            database = client.GetDatabase(settings.Value.Database);
    }
    
    
    }
}