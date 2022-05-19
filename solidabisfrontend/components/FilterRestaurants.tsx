interface Props {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterRestaurants = ({ filter, handleFilterChange }: Props) => {
  return (
    <div>
      <div>
        <p>{''}</p>
      </div>
      <div>search restaurants</div>
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          handleFilterChange(e);
        }}
      />
    </div>
  );
};

export default FilterRestaurants;
