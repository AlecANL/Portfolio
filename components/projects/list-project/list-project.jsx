import React from 'react';
import CardProject from '../card-project/card-project';
import fakeData from '../../../public/data.json';

function ListProject() {
  const [listProjects] = React.useState(fakeData);

  return (
    <>
      {listProjects.projects.slice(0, 3).map(project => (
        <CardProject key={project.id} project={project} />
      ))}
    </>
  );
}

export default ListProject;
