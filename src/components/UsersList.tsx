import React, { Fragment } from 'react';
import { useGetMyUsersQuery } from '../generated/graphql';

const UsersList = () => {
  const { data } = useGetMyUsersQuery();
  return (
    <div className='animate__animated animate__fadeIn'>
      {data.users.map(user => (
        <Fragment key={user.id}>
          <h2> {user.name} </h2>
          <p> {user.description} </p>
          <img
            alt={user.name}
            src={user.image.slice(0, 8) === 'https://' ? user.image : 'https://storage.googleapis.com/social_todos/' + user.image}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default UsersList;
