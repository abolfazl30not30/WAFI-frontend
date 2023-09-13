"use client";
import Image from "next/image";

const Login = () => {
  const googleLogin = () => {
    // Replace with your Google OAuth 2.0 client ID and redirect URI
    const clientId = "YOUR_CLIENT_ID";
    const redirectUri = "http://localhost:3000/auth/google/callback";
    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`;

    window.location.href = authUrl;
  };

  return (
    <>
      <body className="max-h-screen">
        <a
          href="https://www.codewithfaraz.com/"
          className="logo"
          target="_blank"
        ></a>
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 p-5 rounded-2xl shadow-lg w-full md:w-3/5 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 px-5 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#00FFB6] font-mono mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-20 text-center">
                Welcome to Our Login Page
              </h2>

              <button
                onClick={googleLogin}
                className="bg-white border border-[#00FFB6] py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#00FFB6] hover:text-[]"
              >
                <span className="ml-4">Login with Google</span>
              </button>
            </div>

            <div className="w-full md:w-1/2 mt-5 md:mt-0">
              <Image
                src="/Group.svg"
                alt="login image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;
