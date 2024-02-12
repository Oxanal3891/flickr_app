// TagInspo.jsx
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Error404 } from './ErrorPages';
import Title from './TitleInspo';
import PhotoContainer from './PhotoContainerInspo';
import { defaultTags } from '../../APISettingsInspo';

const Tag = () => {
  const { tagTerm } = useParams();

  // Clear previous searches
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.value = '';
  }

  if (tagTerm) {
    // Humanize the tag (convert into human-readable form) term and compare it to the list of default tags
    const humanizedTerm = tagTerm.trim().replace(/\+/g, ' ');
    if (!defaultTags.includes(humanizedTerm)) {
      return <Error404 />;
    }

    return (
      <main>
        {/* Use the Title component to display the tagTerm */}
        <Title phrase={humanizedTerm} />
        {/* Render the PhotoContainer with the tagTerm */}
        <PhotoContainer phrase={humanizedTerm} />
      </main>
    );
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Tag;

