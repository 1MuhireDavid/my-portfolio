const ProjectTag = ({ onClick, name, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 text-lg font-medium rounded-full transition-colors duration-300 ${
        isSelected
          ? "bg-gradient-to-r from-purple-400 to-pink-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
