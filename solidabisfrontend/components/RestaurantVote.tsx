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
    <div>
      {restaurantId && (
        <p>
          My vote: {restaurantName}
          <button onClick={() => handleResetVote(restaurantId, restaurantName)}>
            reset vote
          </button>
        </p>
      )}
    </div>
  );
};

export default RestaurantVote;
