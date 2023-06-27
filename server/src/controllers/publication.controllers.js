import Publication from "../models/publications.models.js"

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find()
            .populate("userId")
            .sort({ createdAt: -1 })
        res.json({
            publications,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const getPublication = async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id).populate("userId")
        if (!publication)
            return res.status(404).json({ message: "Publication not found" })
        res.json({
            publication,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const createPublication = async (req, res) => {
    try {
        const { publication, image } = req.body
        const newPublication = new Publication({
            publication,
            image,
            userId: req.user.id,
        })

        const savePublication = await (await newPublication.save()).populate('userId')
        res.json({
            savePublication,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const deletePublication = async (req, res) => {
    try {
        const deletePublication = await Publication.findByIdAndDelete(
            req.params.id
        )
        if (!deletePublication)
            return res.status(404).json({ message: "Publication not found" })

        res.sendStatus(204)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const updatePublication = async (req, res) => {
    try {
        const publicationUpdated = await Publication.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate("userId")
        if (!publicationUpdated)
            return res.status(404).json({ message: "Publication not found" })
        res.json({
            publicationUpdated,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const publicationLike = async (req, res) => {
    try {
        const post = await Publication.findById(req.params.id)
        const isLiked = post.likes.get(req.user.id)
        if (isLiked) {
            post.likes.delete(req.user.id)
        } else {
            post.likes.set(req.user.id, true)
        }

        const updatePost = await Publication.findByIdAndUpdate(
            req.params.id,
            { likes: post.likes },
            { new: true }
        )

        res.json(updatePost)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
