import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">rana.kaya@voorbeeld.be</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">+32 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">Lommel, Belgium</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
