import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Typography variant="h3">{text}</Typography>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box
        bgcolor="background.default"
        width="30%"
        border={2}
        border="primary.main"
        p={1}
        mb={1}
      >
        {children}
      </Box>
    ),
  },
}

export { options }
