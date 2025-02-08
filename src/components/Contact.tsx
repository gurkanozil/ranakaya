import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mwpvqnvl");
    if (state.succeeded) {
        return <div className="mt-6 text-center content-center max-w-4xl shadow-2xl bg-slate-100 rounded-r-3xl p-12 -ml-12">
          <h2 className="text-6xl font-extrabold text-pink-500">CONTACT</h2>
          <p className="mt-6 text-xl font-light text-gray-600">Thank you for your message! It was successfully sent.</p>
          </div>;
    }
  return (
  //<div className="mt-6 max-w-4xl shadow-2xl bg-slate-100 rounded-r-3xl p-12 -ml-12">
    <div className="mt-6 text-center max-w-4xl content-center  shadow-2xl bg-slate-100 rounded-r-3xl p-12 -ml-12">
      <h2 className="text-6xl font-extrabold text-pink-500">CONTACT</h2>
      <p className="mb-6 text-xl font-light text-gray-600">I'd be glad to answer your questions!</p>

      <div className="bg-slate-700 rounded-3xl shadow-2xl p-8">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" disabled={state.submitting}
              className="w-4/12 bg-slate-300 text-cyan-700 text-xl py-3 rounded-lg hover:bg-slate-400 transition-colors"
            >SEND</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
