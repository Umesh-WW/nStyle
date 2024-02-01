export default function Page() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("your-background-image.svg")' }}
    >
      <form className="bg-white p-8 rounded shadow-md max-w-md">
        <div className="mb-4">
          <label
            htmlFor="yourInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Label
          </label>
          <input
            type="text"
            id="yourInput"
            name="yourInput"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // onClick={handleSubmit}
            // disabled={loading}
          >
            {false ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-t-2 border-blue-100 border-solid rounded-full animate-spin"></div>
                <div>Loading</div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
