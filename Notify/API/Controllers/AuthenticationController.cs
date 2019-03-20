using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using API.Model;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        private UserManager<User> userManager;

        public AuthenticationController(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);

            if(user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                ///// Вынести в отдельный класс?
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySuperSecurekey"));

                var token = new JwtSecurityToken(
                    issuer: "http://localhost:44301",
                    audience: "http://localhost:44301",
                    expires: DateTime.UtcNow.AddHours(1),
                    claims: claims,
                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
                    );
                return Ok(new
                {
                    access_token = new JwtSecurityTokenHandler().WriteToken(token),
                    username = user.UserName   // Возможно это лишнее
                    //expiration = token.ValidTo   
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration(LoginModel model)
        {
            User user = new User { UserName = model.UserName };
            // добавляем пользователя
            var result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySuperSecurekey"));

                var token = new JwtSecurityToken(
                    issuer: "http://localhost:44301",
                    audience: "http://localhost:44301",
                    expires: DateTime.UtcNow.AddHours(1),
                    claims: claims,
                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    access_token = new JwtSecurityTokenHandler().WriteToken(token),
                    username = user.UserName    // Возможно это лишнее
                    //expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

    }
}