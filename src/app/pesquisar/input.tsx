const InputDePesquisa: React.FC<{ termoBusca: string; onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ termoBusca, onSearchChange }) => {
    return (
      <div className="mb-3">
        <label htmlFor="search" className="block text-gray-700">Pesquisar Itens:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Pesquisar por nome, descrição, fabricante"
          value={termoBusca}
          onChange={onSearchChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default InputDePesquisa;
  