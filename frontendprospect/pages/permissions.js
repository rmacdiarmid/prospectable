import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const permissionsPage = props => (
    <div>
      <PleaseSignIn>
        <Permissions />
        <p>hey</p>
      </PleaseSignIn>
    </div>
); 

export default permissionsPage;
