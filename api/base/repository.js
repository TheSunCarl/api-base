class Repository {
    constructor(){
      this.model;
    }
  
    async find(data){
      return await this.model
        .query()
        .select('*')
        .where(data);
    }
  
    async list(){
      return await this.model
        .query();
    }
  
    async insert(data){
      const query = this.getQuery();

      return await query
        .insert(data);
    }
  
    async update(id, patchData){
      const query = this.getQuery();

      return await query
        .patch(patchData)
        .findById(id);
    }
  
    async remove(id){
      const query = this.getQuery();

      return await query
        .delete()
        .findById(id);
    }
  }
  
  module.exports = Repository;