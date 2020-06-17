import UpdateItem from '../components/UpdateItem';

const create = ({ query }) => (
    <div>
        <UpdateItem id={query.id} />
    </div>
); 

export default create;