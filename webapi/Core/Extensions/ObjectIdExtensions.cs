using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using MongoDB.Bson;
namespace webapi.Core.Extensions
{
    public static class ObjectIdExtensions
    {
    public static bool IsValidObjectId(this string value)
    {
            var id = new ObjectId();
            var isIdTrue = ObjectId.TryParse(value,out id);
            if(isIdTrue)
                return true;
            return false ;

    }

    }

    public class ValidIdAttribute : Attribute, IModelValidator
    {   public string ErrorMessage { get; set; } = "Yanlış id formatı";
        public IEnumerable<ModelValidationResult> Validate(ModelValidationContext context)
        {   var value = context.Model as string ;
             var id = new ObjectId();
            var isIdTrue = ObjectId.TryParse(value,out id);
            if(isIdTrue)
                return Enumerable.Empty<ModelValidationResult>();
            return new List<ModelValidationResult>
        {
            new ModelValidationResult("", ErrorMessage)
        };
        }
    }
}