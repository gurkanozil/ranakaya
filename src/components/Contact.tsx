const Contact = () => {
  return (
    <div className="mt-6 max-w-2xl shadow-2xl bg-slate-100 rounded-r-3xl p-12 -ml-12">
      <h2 className="ml-24 text-6xl font-extrabold text-pink-500">CONTACT</h2>
      <p className="ml-24 mb-6 text-xl font-light text-gray-600">I'd be glad to answer your questions!</p>

      <div className="bg-slate-700 rounded-3xl shadow-2xl p-8 mr-8">
        <form className="grid gap-4">
          <div>
            <input type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required/>
          </div>
          <div>
            <input type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required/>
          </div>
          <div>
            <textarea
              id="message"
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit"
              className="w-4/12 bg-slate-300 text-cyan-700 text-xl py-3 rounded-lg hover:bg-slate-400 transition-colors"
            >SEND</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
