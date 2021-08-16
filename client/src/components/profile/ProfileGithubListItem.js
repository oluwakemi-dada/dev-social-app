import React from 'react';

const ProfileGithubListItem = ({ repo }) => {
  return (
    <div key={repo._id} className='repo bg-white p-1 my-1'>
      <div>
        <h4>
          <a href='{repo.html_url}' target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </h4>
        <p>{repo.description}</p>
      </div>
      <div>
        <ul>
          <li className='badge badge-primary'>
            Stars: {repo.stargazers_count}
          </li>
        </ul>
        <ul>
          <li className='badge badge-dark'>Watchers: {repo.watchers_count}</li>
        </ul>
        <ul>
          <li className='badge badge-light'>Forks: {repo.forks_count}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileGithubListItem;
