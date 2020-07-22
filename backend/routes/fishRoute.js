import express from 'express';
import FishData from '../../theitemshopfrontend/src/components/fishData';

router.get("/:id", async (req, res) => {
    const fish = await FishData.findOne({_id: req.params.id});
    if (fish){
        res.send(fish);
    }else{
        res.status(404).send({message:"Fish not found"})
    }
    
  });

  export default router;