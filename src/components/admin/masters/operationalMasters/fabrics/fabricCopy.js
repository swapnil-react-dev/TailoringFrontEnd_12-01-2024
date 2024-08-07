{/* <TableCell align='center'>
                                                            <Autocomplete
                                                                fullWidth
                                                                classes={{
                                                                    option: classes.option,
                                                                }}
                                                                noOptionsText={
                                                                    <span className={classes.noOptionsLabel}>No record</span>
                                                                }
                                                                options={colorList}
                                                                value={row.colorId}
                                                                onChange={handleChangeColors(index)}
                                                                getOptionLabel={(option) => option.color_name + " (" + option.color_code + ")"}
                                                                getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                renderInput={(params) => <TLRinput  {...params} />}
                                                            />
                                                        </TableCell>
                                                        <TableCell align='center'>
                                                            <TLRinputNo
                                                                variant="outlined"
                                                                required
                                                                type="number"
                                                                name="percent"
                                                                value={row.percent}
                                                                size='small'
                                                                onChange={(e) => handleMultipleInput(e, index)}
                                                            />
                                                        </TableCell>

                                                        <TableCell align='center'>
                                                            <Autocomplete
                                                                fullWidth
                                                                classes={{
                                                                    option: classes.option,
                                                                }}
                                                                noOptionsText={
                                                                    <span className={classes.noOptionsLabel}>No record</span>
                                                                }
                                                                options={fabricUsedList}
                                                                value={row.fabricUseId}
                                                                onChange={handleChangeFabricUse(index)}
                                                                getOptionLabel={(option) => option.fabric_use_name}
                                                                getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                renderInput={(params) => <TLRinput  {...params} />}
                                                            />
                                                        </TableCell> */}
