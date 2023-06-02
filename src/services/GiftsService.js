class GiftsService {
  async getGifts() {

    const res = await giftApi.get()
    logger.log('[getting gifts]')
  }
}

export const giftsService = new GiftsService