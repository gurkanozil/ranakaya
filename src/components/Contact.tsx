import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-3xl">
      <h2 className="text-6xl font-extrabold text-pink-500 mb-6">CONTACT</h2>
      <div className="bg-white rounded-xl shadow-sm p-1">
        <div className="grid gap-6 mb-6">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" size={32} />
            <div>
              <h3 className="font-extrabold text-pink-500">EMAIL</h3>
              <p className="text-gray-600">rana.kaya@voorbeeld.be</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" size={32} />
            <div>
              <h3 className="font-extrabold text-pink-500">PHONE</h3>
              <p className="text-gray-600">+32 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" size={32} />
            <div>
              <h3 className="font-extrabold text-pink-500">LOCATION</h3>
              <p className="text-gray-600">Lommel, Belgium</p>
            </div>
          </div>
        </div>

        <form className="grid gap-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-bold text-xl text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
