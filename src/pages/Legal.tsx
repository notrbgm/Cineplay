import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Legal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-3xl font-bold mb-8 text-white">Legal Disclaimer</h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            CinePlay does not host any files on its servers. All content is provided by third-party services.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Important Notice</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                CinePlay is a content aggregator that solely links to third-party services and providers.
              </li>
              <li>
                We do not host, upload, or distribute any videos, films, or media files on our platform.
              </li>
              <li>
                All media content displayed on CinePlay is hosted by external services that are not affiliated with CinePlay.
              </li>
              <li>
                Any legal concerns regarding the content should be directed to the respective file hosts and providers.
              </li>
              <li>
                CinePlay is not liable for any content provided by third-party video services or its hosting.
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Terms of Use</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                By using CinePlay, you acknowledge and agree that we have no control over the content displayed through third-party services.
              </li>
              <li>
                Users are solely responsible for ensuring their use of third-party services complies with applicable laws and regulations.
              </li>
              <li>
                CinePlay reserves the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Copyright and DMCA</h2>
            <p className="mb-4">
              If you believe that your copyrighted work has been linked without authorization, please contact the respective hosting services directly. CinePlay is not responsible for hosting or removing content from third-party services.
            </p>
            <p>
              As a content aggregator, CinePlay operates under the safe harbor provisions of the Digital Millennium Copyright Act (DMCA) and similar regulations worldwide.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Limitation of Liability</h2>
            <p className="mb-4">
              CinePlay, its operators, affiliates, and licensors shall not be held liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Your use or inability to use the service</li>
              <li>Any content accessed through third-party services</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Statements or conduct of any third party on the service</li>
              <li>Redirects or damages caused by advertisements displayed on the site</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Advertising Disclaimer</h2>
            <p className="mb-4">
              CinePlay may display advertisements from third-party providers. By interacting with these advertisements, you acknowledge that CinePlay is not responsible for any redirects, damages, or actions that may result from engaging with these advertisements.
            </p>
          </div>

          {/* Owner Info Section for Pranking */}
          <div className="bg-gray-900 p-6 rounded-lg mt-10 text-center">
            <h2 className="text-xl font-semibold mb-4 text-white">Important Owner Info</h2>
            <p className="text-lg text-gray-400">
              This service is proudly owned by <strong>Athul</strong> and <strong>Alvin</strong>. For any questions, concerns, or legal inquiries, please refrain from contacting the owners directly. They have no idea what they're doing!
            </p>
            <p className="text-sm text-gray-500 mt-4">
              (Just kidding! Don't bother them, they’re probably sleeping or playing games.)
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
