function Filters() {
  return (
    <form>
      <div className="flex bg-slate-100 gap-2 h-14 p-2 justify-between rounded-md mb-3">
        {/* Location */}
        <select
          type="select"
          class="rounded-md p-2 border-2 border-slate-200 w-[20%] text-sm"
        >
          <option value="">Any Location</option>
          <option value="Thailand">Thailand</option>
          <option value="Vietnam">Vietnam</option>
        </select>

        {/* Number of rooms */}
        <select
          type="select"
          class="rounded-md p-2 border-2 border-slate-200 w-[20%] text-sm"
        >
          <option value="">Any Rooms</option>
          <option value="1">1 room</option>
          <option value="2">2 rooms</option>
        </select>

        {/* Max price */}
        <input
          type="number"
          class="rounded-md p-2 border-2 border-slate-200 w-[20%] text-sm"
          placeholder="max price"
        />

        {/* Sort by */}
        <select
          type="select"
          class="rounded-md p-2 border-2 border-slate-200 w-[20%] text-sm"
        >
          <option value="price_low">sort by</option>
          <option value="price_low">Lowest Price</option>
          <option value="furthest">Furthest from party hostels</option>
        </select>

        {/* Keywords */}
        <input
          type="text"
          class="rounded-md p-2 border-2 border-slate-200 w-[20%] text-sm"
          placeholder="keywords..."
        />

        {/* Submit button */}
        <button className="rounded-md bg-[#FB7185] text-white p-2 ">
          Search
        </button>
      </div>
    </form>
  )
}

export default Filters
