using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Persistance.Repository;

namespace webapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
                        services.Configure<Settings>(options=>{
                        options.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
                        options.Database = Configuration.GetSection("MongoConnection:Database").Value;
                        });
                    services.AddAutoMapper();
                    services.AddMvc();
                    services.AddScoped<ISiteRepository,SiteRepository>();
                    services.AddScoped<IKazanRepository,KazanRepository>();
                    services.AddScoped<IBlokRepository,BlokRepository>();
                    services.AddScoped<IDaireRepository,DaireRepository>();
                    services.AddScoped<IModemRepository,ModemRepository>();
                    services.AddScoped<ISayacRepository,SayacRepository>();

                     services.AddCors();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
                app.UseCors(
        options => options.WithOrigins("http://localhost:4200").AllowAnyMethod()
            );
            app.UseMvc();
        }

      
    }
}
