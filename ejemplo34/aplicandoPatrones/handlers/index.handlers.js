/* Se inyectan los servicios para no tener que importarlos constantemente */

module.exports = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get('/v3.1/region/ame')
    return res.send(data);
  },
});
