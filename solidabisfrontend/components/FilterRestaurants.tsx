interface Props {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterRestaurants = ({ filter, handleFilterChange }: Props) => {
  return (
    <div style={{ marginBottom: '5px' }}>
      search restaurants
      <input
        id="filter-restaurants"
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
