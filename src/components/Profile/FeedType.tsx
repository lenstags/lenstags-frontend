import TabButton from '@components/UI/TabButton';
import type { ProfileStats } from '@generated/types';
import { ChatAlt2Icon, FilmIcon, PencilAltIcon, PhotographIcon } from '@heroicons/react/outline';
import { Leafwatch } from '@lib/leafwatch';
import type { Dispatch, FC } from 'react';
import { PROFILE } from 'src/tracking';

interface Props {
  stats: ProfileStats;
  setFeedType: Dispatch<string>;
  feedType: string;
}

const FeedType: FC<Props> = ({ stats, setFeedType, feedType }) => {
  return (

    // OPTIONS FOR SEEING POSTS

    <div className="flex overflow-x-auto gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
      <TabButton
        name="POST"
        icon={<PencilAltIcon className="w-4 h-4" />}
        active={feedType === 'FEED'}
        count={stats?.totalPosts + stats?.totalMirrors}
        onClick={() => {
          setFeedType('FEED');
          Leafwatch.track(PROFILE.SWITCH_FEED);
        }}
      />
      <TabButton
        name="COLLECTIONS"
        icon={<ChatAlt2Icon className="w-4 h-4" />}
        active={feedType === 'REPLIES'}
        count={stats?.totalComments}
        onClick={() => {
          setFeedType('REPLIES');
          Leafwatch.track(PROFILE.SWITCH_REPLIES);
        }}
      />
      
    </div>
  );
};

export default FeedType;
