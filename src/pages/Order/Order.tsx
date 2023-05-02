/* eslint-disable @typescript-eslint/no-misused-promises */
import useOrderDialogStore from '@src/features/order-dialog'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Order } from '@src/interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { OrderSchema } from '@src/schemas/order'
import { useMutation } from '@tanstack/react-query'
import { axiosClient } from '@src/main'
import { ToastContainer, toast } from 'react-toastify'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'

export default function BookOrder({ bookId }: { bookId: Order['bookId'] }) {
  const { register, formState: { errors }, handleSubmit, reset } = useForm<Order>({
    mode: 'all',
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      bookId
    }
  })
  const { onClose } = useDisclosure()
  const { showModal, toggle } = useOrderDialogStore()
  const { mutateAsync } = useMutation({
    mutationKey: ['orders'],
    mutationFn: async (data: Order) => {
      return (await axiosClient.post('/user-order', data)).data
    }
  });
  const orderHandler: SubmitHandler<Order> = async (data) => {
    console.log(data);
    try {
      await mutateAsync(data)
      toast.success('Success! We will contact you soon!')
      onClose();
      reset();
    } catch (error) {
      toast.error('Failed!')
    }
  }
  return (
    <>
      <Modal isOpen={showModal} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Box as="form" onSubmit={handleSubmit(orderHandler)} className="grid gap-3" style={{ padding: 0 }}>

            <ModalHeader>Fill in the form</ModalHeader>
            <ModalCloseButton onClick={toggle} />
            <ModalBody>
              <Stack spacing="4">

                <FormControl isInvalid={Boolean(errors.name?.message)}>
                  <FormLabel>Name</FormLabel>
                  <Input isInvalid={Boolean(errors.name?.message)} {...register('name')} placeholder="Name" type="text" />
                  {errors.name && (
                    <FormErrorMessage mb="4">
                      {errors.name?.message}
                    </FormErrorMessage>
                  )}

                </FormControl>
                <FormControl isInvalid={Boolean(errors.phone?.message)}>
                  <FormLabel>Phone number</FormLabel>
                  <Input isInvalid={Boolean(errors.phone?.message)} {...register('phone')} placeholder="Phone number" type="tel" />
                  {errors.phone && (
                    <FormErrorMessage mb="4">
                      {errors.phone.message}
                    </FormErrorMessage>
                  )}

                </FormControl>
                <Button colorScheme="red" type="submit">Submit</Button>
              </Stack>

            </ModalBody>

            <ModalFooter>

            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </>
  )
}
