interface Props {
  restaurantName: string;
  restaurantId: string;
  handleResetVote: (id: string, name: string) => void;
}
const RestaurantVote = ({
  restaurantName,
  restaurantId,
  handleResetVote,
}: Props) => {
  return (
    <>
      {restaurantId && (
        <p>
          My vote: {restaurantName}
          <button
            id="vote-reset-button"
            onClick={() => handleResetVote(restaurantId, restaurantName)}
          >
            reset vote
          </button>
        </p>
      )}
    </>
  );
};

export default RestaurantVote;
