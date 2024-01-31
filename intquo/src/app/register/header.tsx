export default function Header() {
  return (
    <div className="bg-indigo-500 pb-25">
      <div className="max-w-7xl mx-auto pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-center">
            Register
          </h1>
          <p className="mt-5 text-xl text-white sm:text-center">
            Already have an account?{" "}
            <a href="#" className="text-indigo-100 hover:text-white">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
