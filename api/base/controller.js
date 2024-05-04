class Controller{
  constructor(){
    this.repository;
  }

  async find(ctx, next){
    const id = ctx.params.id;

    try{
      ctx.body = await this.repository.find({id});
    } catch(err){ throw new Error(err) }
  }

  async list(ctx, next){
    try{
      ctx.body = await this.repository.list();
    } catch(err) { throw new Error(err) }
  }

  async insert(ctx, next){
    const data = ctx.request.body;
    
    try{
      ctx.body = await this.repository.insert(data);
    } catch(err) { throw new Error(err) }
  }

  async update(ctx, next){
    const { id, patchData } = ctx.request.body;
    
    try{
      ctx.body = await this.repository.update(id, patchData);
    } catch(err) { throw new Error(err) }
  }

  async remove(ctx, next){
    const id = ctx.params.id;
    
    try{
      ctx.body = await this.repository.remove(id);
    } catch(err) { throw new Error(err) }
  }
}

module.exports = Controller;